import { CURRENCY } from './index';
import { setCookie } from '../utils/cookie';
import { QUERIES } from '../constants/routes';

export const updateCurrency = (currency) => {
  setCookie(QUERIES.CURRENCY, currency);

  return {
    type: CURRENCY.UPDATE_ACTIVE_CURRENCY,
    currency,
  };
};

export const resetStatus = () => ({
  type: CURRENCY.RESET_STATUS,
});
