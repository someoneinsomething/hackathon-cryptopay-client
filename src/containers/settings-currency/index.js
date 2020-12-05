import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { SettingsCurrencyView } from './View';
import { FORM_NAMES } from '../../constants';
import { updateCurrency } from '../../actions/currency';
import { CURRENCY } from '../../constants/fields';
import { CurrencyView } from '../../containers';

export const SettingsCurrencyContainer = ({ handleSubmit, initialize, ...props }) => {
  const dispatch = useDispatch();
  const [isSuccessChange, setIsSuccessChange] = useState(false);

  const { activeCurrency } = useSelector((state) => ({
    pageLoading: state.navigation.pageLoading,
    activeCurrency: state.currency.activeCurrency,
  }));

  useEffect(() => {
    initialize({ [CURRENCY.CURRENCY]: activeCurrency });
  }, [activeCurrency]);

  const isFormDisabled = () => {
    const { valid, pristine, submitting } = props;
    return !valid || pristine || submitting;
  };

  const submitUpdateCurrency = (form) => {
    dispatch(updateCurrency(form[CURRENCY.CURRENCY]));
    setIsSuccessChange(true);
  };

  return (
    <form onSubmit={handleSubmit((form) => submitUpdateCurrency(form))}>
      <SettingsCurrencyView disabled={isFormDisabled()} success={isSuccessChange} />
      {/* <CurrencyView currencies={{ usd: 0.01, btc: 0.02, rub: 0.03 }} /> */}
    </form>
  );
};

const settingsCurrencyForm = reduxForm({
  form: FORM_NAMES.SETTINGS_CURRENCY,
});

SettingsCurrencyContainer.propTypes = {
  handleSubmit: PropTypes.func,
  initialize: PropTypes.func,
  valid: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export const SettingsCurrency = settingsCurrencyForm(SettingsCurrencyContainer);
