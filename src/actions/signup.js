import { httpRequest, setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';
import { convertSignupData } from '../api/signup';

import { API } from '../constants/api';
import { ROUTES } from '../constants/routes';
import { SIGNUP } from '.';

const setFail = (message) => ({
  type: SIGNUP.FAIL,
  message,
});

const setSuccess = (token) => ({
  type: SIGNUP.LOAD_SUCCESS,
  token,
});

const setLoading = () => ({
  type: SIGNUP.LOAD_PENDING,
});

export const signupReset = (value) => ({
  type: SIGNUP.RESET,
  reset: value,
});

export const signup = (actionData) => {
  const payload = convertSignupData(actionData);

  return (dispatch, getState) => {
    const { linkBeforeAuth } = getState().navigation;
    dispatch(setLoading());

    return httpRequest
      .post(API.SIGNUP, payload)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        redirect(linkBeforeAuth || ROUTES.HOME);
        dispatch(setSuccess(data.accessToken));
      })
      .catch(({ response: { data } }) => {
        dispatch(setFail(data.message));
        dispatch(signupReset(true));
      });
  };
};
