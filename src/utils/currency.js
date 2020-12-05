import { getCookie } from '../utils/cookie';
import { QUERIES } from '../constants/routes';
import { updateCurrency } from '../actions/currency';

export const initCurrencyFromCookie = (ctx) => {
  if (ctx) {
    const currency = getCookie(QUERIES.CURRENCY, ctx);
    if (currency) {
      ctx.store.dispatch(updateCurrency(currency));
    }
  }
};
