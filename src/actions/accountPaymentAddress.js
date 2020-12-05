import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { ACCOUNT_PAYMENT_ADDRESS } from './index';
import { performAccountPaymentAddress } from '../api/account';

const setFail = (message) => ({
  type: ACCOUNT_PAYMENT_ADDRESS.LOAD_FAIL,
  message,
});

const setLoaded = (data) => ({
  type: ACCOUNT_PAYMENT_ADDRESS.LOAD_SUCCESS,
  data: performAccountPaymentAddress(data),
});

const setLoading = () => ({
  type: ACCOUNT_PAYMENT_ADDRESS.LOAD_PENDING,
});

const setUpdating = () => ({
  type: ACCOUNT_PAYMENT_ADDRESS.UPDATE_PENDING,
});

const setUpdated = (data) => ({
  type: ACCOUNT_PAYMENT_ADDRESS.UPDATE_SUCCESS,
  data: performAccountPaymentAddress(data),
});

export const getAccountPaymentAddress = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      const response = await httpRequest.get(API.ACCOUNT_PAYMENT_ADDRESS);
      dispatch(setLoaded(response.data));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const createBitcoinPaymentAddress = () => {
  return async (dispatch) => {
    dispatch(setUpdating());
    try {
      const response = await httpRequest.post(API.CREATE_BITCOIN_ADDRESS);
      dispatch(setUpdated(response.data));
    } catch {}
  };
};
