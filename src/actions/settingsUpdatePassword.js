import { httpRequest } from '../utils/request';
import { API } from '../constants/api';
import { SETTINGS_UPDATE_PASSWORD } from './index';
import { convertSettingsUpdatePasswordData } from '../api/settings';

const setFail = (message) => ({
  type: SETTINGS_UPDATE_PASSWORD.UPDATE_FAIL,
  message,
});

export const settingsUpdatePasswordSuccess = () => ({
  type: SETTINGS_UPDATE_PASSWORD.UPDATE_SUCCESS,
});

const setLoading = () => ({
  type: SETTINGS_UPDATE_PASSWORD.UPDATE_PENDING,
});

const setLoaded = () => ({
  type: SETTINGS_UPDATE_PASSWORD.LOAD_SUCCESS,
});

export const resetStatus = () => ({
  type: SETTINGS_UPDATE_PASSWORD.RESET_STATUS,
});

export const settingsUpdatePassword = (payloadData) => {
  const payload = convertSettingsUpdatePasswordData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());

    try {
      await httpRequest.patch(API.UPDATE_PASSWORD, payload);
      dispatch(settingsUpdatePasswordSuccess());
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};

export const settingsUpdatePasswordWithConfirm = (payloadData) => {
  const payload = convertSettingsUpdatePasswordData(payloadData);

  return async (dispatch) => {
    dispatch(setLoading());

    try {
      await httpRequest.post(API.UPDATE_PASSWORD_WITH_CONFIRM, payload);
      await dispatch(setLoaded());
    } catch ({ response: { data } }) {
      dispatch(setFail(data.message));
    }
  };
};
