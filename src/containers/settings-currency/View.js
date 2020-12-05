import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { SELECT_CURRENCY_VALUES } from '../../constants/static';
import { CURRENCY } from '../../constants/fields';
import { SelectField } from '../../components/fields';
import { Text, AlertSection } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const SettingsCurrencyView = ({ success, disabled }) => (
  <React.Fragment>
    <Box variant="outlined">
      <IndentLayout>
        <FormTitle tid="SETTINGS.CURRENCY.FORM.TITLE" offset={4} />
        <FieldGrid double id="lang">
          <Field
            name={CURRENCY.CURRENCY}
            component={SelectField}
            label={<Text tid="SETTINGS.CURRENCY.FORM.CURRENCY" />}
            items={SELECT_CURRENCY_VALUES}
          />
        </FieldGrid>
        <ButtonPrimary size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
          <Text tid="SETTINGS.CURRENCY.FORM.BUTTON_SUBMIT" />
        </ButtonPrimary>
      </IndentLayout>
    </Box>
    <AlertSection successMessage="SETTINGS.CURRENCY.FORM.ALERT_SUCCESS" success={success} />
  </React.Fragment>
);

SettingsCurrencyView.propTypes = {
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};
