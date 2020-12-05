import { httpRequest } from '../utils/request';

import { API } from '../constants/api';
import { ACCOUNT_PAYMENT_HISTORY } from './index';
import { performPaymentTransactionList } from '../api/payment';

const setFail = (message) => ({
  type: ACCOUNT_PAYMENT_HISTORY.LOAD_FAIL,
  message,
});

const setLoaded = (data) => ({
  type: ACCOUNT_PAYMENT_HISTORY.LOAD_SUCCESS,
  data: performPaymentTransactionList(data),
});

const setLoading = () => ({
  type: ACCOUNT_PAYMENT_HISTORY.LOAD_PENDING,
});

const setUpdate = (data) => ({
  type: ACCOUNT_PAYMENT_HISTORY.UPDATE_SUCCESS,
  data: performPaymentTransactionList(data),
});

const setUpdating = () => ({
  type: ACCOUNT_PAYMENT_HISTORY.UPDATE_PENDING,
});

export const getAccountPaymentHistory = ({ skip, take }) => {
  const URL = API.ACCOUNT_PAYMENT_HISTORY({ skip, take });

  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await httpRequest.get(URL);
      dispatch(setLoaded(response.data));
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const updateAccountPaymentHistory = ({ skip, take }) => {
  const URL = API.ACCOUNT_PAYMENT_HISTORY({ skip, take });

  return async (dispatch) => {
    dispatch(setUpdating());
    try {
      const response = await httpRequest.get(URL);
      dispatch(setUpdate(response.data));
    } catch {}
  };
};
