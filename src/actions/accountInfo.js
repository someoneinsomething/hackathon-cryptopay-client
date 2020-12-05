import { httpRequest } from '../utils/request';
import { API } from '../constants/api';
import { ACCOUNT_INFO } from './index';
import { performAccountInfo } from '../api/account';

const setFail = (message) => ({
  type: ACCOUNT_INFO.LOAD_FAIL,
  message,
});

const setSuccess = (data) => ({
  type: ACCOUNT_INFO.LOAD_SUCCESS,
  data: performAccountInfo(data),
});

const setLoading = () => ({
  type: ACCOUNT_INFO.LOAD_PENDING,
});

export const setAccountInfoData = (data) => ({
  type: ACCOUNT_INFO.SET_DATA,
  data,
});

export const getAccountInfo = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await httpRequest.get(API.ACCOUNT_INFO);
      dispatch(setSuccess(response.data));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
