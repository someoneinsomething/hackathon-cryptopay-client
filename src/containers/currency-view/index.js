import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { CURRENCY } from '../../constants/static';
import { Text } from '../../components';

// currencies: { usd: 100, rub: 1000, btc: 0.1}
export const CurrencyView = ({
  currencies = { [CURRENCY.USD]: 0, [CURRENCY.RUB]: 0, [CURRENCY.BTC]: 0 },
}) => {
  const { t } = useTranslation();

  const { activeCurrency } = useSelector((state) => state.currency);

  const currency = currencies[activeCurrency] ? activeCurrency : CURRENCY.DEFAULT;

  const price = `${currencies[currency]} ${t(`CURRENCY.${currency.toUpperCase()}`)}`;

  return price;
};

CurrencyView.propTypes = {
  currencies: PropTypes.object,
};
