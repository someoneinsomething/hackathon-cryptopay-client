export const ROLE_TYPE = {
  BLOCKED: 0,
  USER: 1,
  SUPPORT: 2,
  ADMIN: 3,
};

export const LANG = {
  RU: 'RU',
  EN: 'EN',
  DEFAULT: 'RU',
};

export const CURRENCY = {
  USD: 'USD',
  RUB: 'RUB',
  BTC: 'BTC',
  DEFAULT: 'USD',
};

export const SELECT_LANG_VALUES = [
  {
    id: 1,
    value: LANG.RU,
    tid: 'STATIC.LANG.RU',
  },
  {
    id: 2,
    value: LANG.EN,
    tid: 'STATIC.LANG.EN',
  },
];

export const SELECT_CURRENCY_VALUES = [
  {
    id: 1,
    value: CURRENCY.USD,
    tid: 'STATIC.CURRENCY.USD',
  },
  {
    id: 2,
    value: CURRENCY.RUB,
    tid: 'STATIC.CURRENCY.RUB',
  },
  {
    id: 3,
    value: CURRENCY.BTC,
    tid: 'STATIC.CURRENCY.BTC',
  },
];
