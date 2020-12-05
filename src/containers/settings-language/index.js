import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { SettingsLanguageView } from './View';
import { FORM_NAMES } from '../../constants';
import { updateLanguage } from '../../actions/lang';
import { LANGUAGE } from '../../constants/fields';
import { i18n } from '../../utils/i18n';
import { fixMuiSelectLabels } from '../../utils/lib/mui';

export const SettingsLanguageContainer = ({ handleSubmit, initialize, valid, pristine, submitting }) => {
  const dispatch = useDispatch();
  const [isSuccessChange, setIsSuccessChange] = useState(false);

  const { activeLang } = useSelector((state) => ({
    pageLoading: state.navigation.pageLoading,
    activeLang: state.lang.activeLang,
  }));

  useEffect(() => {
    fixMuiSelectLabels();
  }, []);

  useEffect(() => {
    initialize({
      [LANGUAGE.LANG]: activeLang,
    });
  }, [activeLang]);

  const isFormDisabled = () => {
    return !valid || pristine || submitting;
  };

  const submitUpdateLang = (form) => {
    dispatch(updateLanguage(form[LANGUAGE.LANG]));
    setIsSuccessChange(true);
    i18n.changeLanguage(form[LANGUAGE.LANG]);
    fixMuiSelectLabels();
  };

  return (
    <form onSubmit={handleSubmit((form) => submitUpdateLang(form))}>
      <SettingsLanguageView disabled={isFormDisabled()} success={isSuccessChange} />
    </form>
  );
};

const settingsLanguageForm = reduxForm({
  form: FORM_NAMES.SETTINGS_LANGUAGE,
});

SettingsLanguageContainer.propTypes = {
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const SettingsLanguage = settingsLanguageForm(SettingsLanguageContainer);
