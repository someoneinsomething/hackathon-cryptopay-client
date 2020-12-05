import lang from 'i18next';
import { ROLE_TYPE } from '../constants/static';

export const getDateTime = (raw) => new Date(raw).toLocaleString();
export const getDate = (raw) => new Date(raw).toLocaleDateString();
export const getGdsCategory = (value) => value && lang.t(`STATIC.GDS_CATEGORY.${value}`);
export const getCurrencyPrice = (price, currency) =>
  price && currency && `${price}${lang.t(`STATIC.CURRENCY_SIGN.${currency}`)}`;

export const performLocalization = (localization, currentLang) => {
  return localization.length ? localization.find((item) => item.lang === currentLang) || {} : {};
};

export const getUserRole = (role) => {
  const type = Object.values(ROLE_TYPE).find((id) => id === role);

  if (!type) {
    return null;
  }

  return lang.t(`STATIC.ROLE_TYPE.${type}`);
};

export const performWithPagination = (fn) => (raw, ...props) => {
  const { skip = 0, take = 0, amount = 0, list, ...rawElse } = raw;

  const pagination = {
    skip: Number(skip),
    take: Number(take),
    amountItems: Number(amount),
    amountPages: Math.ceil(amount / take),
    currentPage: Math.ceil(skip / take),
  };

  const performedList = fn(list, ...props);

  return {
    list: performedList,
    pagination,
    ...rawElse,
  };
};
