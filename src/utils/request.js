import * as jwtDecode from 'jwt-decode';
import axios from 'axios';
import { setCookie, getBrowserCookie } from './cookie';
import { COOKIE_AUTH } from '../constants';
import { logOut } from '../actions/login';
import { redirect } from './navigation';
import { ROUTES } from '../constants/routes';

const transformResponse = (data, headers) => {
  if (headers['content-type'] === 'text/plain; charset=UTF-8') return data;
  data = JSON.parse(data);
  return data;
};

export const httpRequest = axios.create({
  baseURL: `${process.env.API}`,
  timeout: 100000,
  transformResponse: [transformResponse],
});

export const authDecode = (raw) => jwtDecode(raw);

export const AUTH_HEADER = 'authorization';
export const setAutorizationHeader = (tokenHash) => {
  const token = `Bearer ${tokenHash}`;

  httpRequest.defaults.headers.common[AUTH_HEADER] = token;
};

export const setAutorization = (token) => {
  setAutorizationHeader(token);

  setCookie(COOKIE_AUTH, token);
};

const authToken = getBrowserCookie(COOKIE_AUTH);
if (authToken) {
  setAutorizationHeader(authToken);
}

const onResponseSuccess = (response) => {
  return response;
};

const onResponseError = (error) => {
  if (!error.response) {
    error.response = { data: { message: 'INTERNAL_SERVER_ERROR' } };
  }
  if (error.response) {
    if (error.response.status === 401) {
      logOut({ saveLink: true });
    }

    if (error.response.status === 403) {
      return redirect(ROUTES.ACCESS_DENIED);
    }

    if (error.response.status === 500) {
      // error.response.data.message = 'INTERNAL_SERVER_ERROR';
      return redirect(ROUTES.SERVER_ERROR);
    }

    if (error.response.status === 404) {
      return redirect(ROUTES.NOT_FOUND);
    }
    return Promise.reject(error);
  }
};

httpRequest.interceptors.response.use(onResponseSuccess, onResponseError);
