import Router from 'next/router';

import { httpRequest, setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';
import { convertLoginData } from '../api/login';

import { API } from '../constants/api';
import { ROUTES, QUERIES } from '../constants/routes';
import { LOGIN } from '.';

const loginFail = (message) => ({
  type: LOGIN.FAIL,
  message,
});

const loginSuccess = (token) => ({
  type: LOGIN.LOAD_SUCCESS,
  token,
});

const loginLoading = () => ({
  type: LOGIN.LOAD_PENDING,
});

export const loginReset = (value) => ({
  type: LOGIN.RESET,
  reset: value,
});

export const logOut = ({ saveLink = false } = {}) => {
  setAutorization(null);
  if (saveLink) {
    redirect(`${ROUTES.LOGIN}?${QUERIES.LINK_BEFORE_AUTH}=${Router.asPath}`, { local: false });
  } else {
    redirect(`${ROUTES.LOGIN}`, { local: false });
  }
};

export const login = (actionData) => {
  const payload = convertLoginData(actionData);

  return (dispatch, getState) => {
    const { linkBeforeAuth } = getState().navigation;

    dispatch(loginLoading());

    return httpRequest
      .post(API.LOGIN, payload)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        redirect(linkBeforeAuth || ROUTES.HOME);

        return dispatch(loginSuccess(data.accessToken));
      })
      .catch(({ response: { data } }) => {
        dispatch(loginFail(data.message));
        dispatch(loginReset(true));
      });
  };
};

export const updateLogin = (data) => (dispatch) => {
  setAutorization(data);
  redirect(ROUTES.HOME);
  return dispatch(loginSuccess(data.accessToken));
};
