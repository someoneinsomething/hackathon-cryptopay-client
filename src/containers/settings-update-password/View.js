import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { SETTINGS_UPDATE_PASSWORD } from '../../constants/fields';
import { TextFieldPassword } from '../../components/fields';
import { Text, Loader, AlertSection } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FieldGrid } from '../../components/grids';
import { FormTitle } from '../../components/titles';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const UpdatePasswordView = ({ disabled, loading, error, errorMessage, success }) => {
  return (
    <React.Fragment>
      {loading && <Loader />}
      <Box variant="outlined">
        <IndentLayout>
          <FormTitle tid="SETTINGS.UPDATE_PASSWORD.FORM.TITLE" offset={4} />
          <FieldGrid double>
            <Field
              name={SETTINGS_UPDATE_PASSWORD.PASSWORD}
              loading={loading}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_PASSWORD.FORM.PASSWORD" />}
            />
            <Field
              name={SETTINGS_UPDATE_PASSWORD.REPEAT_PASSWORD}
              loading={loading}
              component={TextFieldPassword}
              label={<Text tid="SETTINGS.UPDATE_PASSWORD.FORM.REPEAT_PASSWORD" />}
            />
          </FieldGrid>
          <ButtonPrimary size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
            <Text tid="SETTINGS.UPDATE_PASSWORD.FORM.BUTTON_SUBMIT" />
          </ButtonPrimary>
        </IndentLayout>
      </Box>
      <AlertSection
        successMessage="SETTINGS.UPDATE_PASSWORD.FORM.ALERT_SUCCESS"
        error={error}
        success={success}
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
};

UpdatePasswordView.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
};
