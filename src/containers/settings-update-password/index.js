import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { reduxForm, reset } from 'redux-form';

import { FORM_NAMES } from '../../constants';
import { validate } from '../../validations/settingsUpdatePassword';
import { SETTINGS_UPDATE_PASSWORD } from '../../constants/fields';
import {
  settingsUpdatePassword,
  settingsUpdatePasswordWithConfirm,
  resetStatus,
} from '../../actions/settingsUpdatePassword';
import {
  getData,
  getErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../utils/store';

import { UpdatePasswordView } from './View';

const SettingsUpdatePasswordContainer = ({ handleSubmit, ...props }) => {
  const dispatch = useDispatch();
  const {
    statusError,
    errorMessage,
    loading,
    success,
    data,
    dataLoading,
    dataLoaded,
    pageLoading,
  } = useSelector(({ settingsUpdatePassword: { request }, accountInfo, navigation }) => ({
    statusError: isRequestError(request),
    errorMessage: getErrorMessage(request),
    loading: isRequestPending(request),
    success: isRequestSuccess(request),
    data: getData(accountInfo.data),
    dataLoading: isRequestPending(accountInfo.data),
    dataLoaded: isRequestSuccess(accountInfo.data),
    pageLoading: navigation.pageLoading,
  }));

  useEffect(() => {
    return () => {
      dispatch(resetStatus());
    };
  }, []);

  const isFormDisabled = () => {
    const { valid, pristine, submitting } = props;

    return !valid || pristine || submitting || loading || dataLoading;
  };

  const submitUpdatePassword = (form) => {
    if (data.pgp) {
      dispatch(
        settingsUpdatePasswordWithConfirm({
          password: form[SETTINGS_UPDATE_PASSWORD.PASSWORD],
        }),
      );
      dispatch(reset(FORM_NAMES.SETTINGS_UPDATE_PASSWORD));
    } else {
      dispatch(
        settingsUpdatePassword({
          password: form[SETTINGS_UPDATE_PASSWORD.PASSWORD],
        }),
      );
      dispatch(reset(FORM_NAMES.SETTINGS_UPDATE_PASSWORD));
    }
  };

  const isLoading = (pageLoading && !dataLoaded) || dataLoading || loading;

  return (
    <form onSubmit={handleSubmit((form) => submitUpdatePassword(form))}>
      <UpdatePasswordView
        disabled={isFormDisabled()}
        loading={isLoading}
        error={statusError}
        errorMessage={errorMessage}
        success={success}
      />
    </form>
  );
};

const ReduxForm = reduxForm({
  form: FORM_NAMES.SETTINGS_UPDATE_PASSWORD,
  validate,
});

SettingsUpdatePasswordContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const SettingsUpdatePassword = ReduxForm(SettingsUpdatePasswordContainer);
