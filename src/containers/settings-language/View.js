import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { SELECT_LANG_VALUES } from '../../constants/static';
import { LANGUAGE } from '../../constants/fields';
import { SelectField } from '../../components/fields';
import { Text, AlertSection } from '../../components';
import { ButtonPrimary } from '../../components/buttons';
import { FormTitle } from '../../components/titles';
import { FieldGrid } from '../../components/grids';
import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';

export const SettingsLanguageView = ({ success, disabled }) => (
  <React.Fragment>
    <Box variant="outlined">
      <IndentLayout>
        <FormTitle tid="SETTINGS.LANGUAGE.FORM.TITLE" offset={4} />
        <FieldGrid double id="lang">
          <Field
            name={LANGUAGE.LANG}
            component={SelectField}
            label={<Text tid="SETTINGS.LANGUAGE.FORM.LANG" />}
            items={SELECT_LANG_VALUES}
          />
        </FieldGrid>
        <ButtonPrimary size="large" variant="outlined" color="primary" disabled={disabled} type="submit">
          <Text tid="SETTINGS.LANGUAGE.FORM.BUTTON_SUBMIT" />
        </ButtonPrimary>
      </IndentLayout>
    </Box>
    <AlertSection successMessage="SETTINGS.LANGUAGE.FORM.ALERT_SUCCESS" success={success} />
  </React.Fragment>
);

SettingsLanguageView.propTypes = {
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};
