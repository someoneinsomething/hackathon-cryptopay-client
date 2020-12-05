import { ACCOUNT_INFO, ACCOUNT_BALANCE, ACCOUNT_PAYMENT_ADDRESS } from '../constants/fields';

export const performAccountInfo = (raw) => ({
  id: raw[ACCOUNT_INFO.ID],
  nickname: raw[ACCOUNT_INFO.NICKNAME],
  login: raw[ACCOUNT_INFO.LOGIN],
  pgp: raw[ACCOUNT_INFO.PGP] || null,
  email: raw[ACCOUNT_INFO.EMAIL] || null,
});

export const performAccountBalance = (raw) => ({
  totalBalance: raw[ACCOUNT_BALANCE.TOTAL_BALANCE],
  bitcoinBalance: raw[ACCOUNT_BALANCE.BITCOIN_BALANCE],
});

export const performAccountPaymentAddress = (raw) => ({
  bitcoinAddress: raw[ACCOUNT_PAYMENT_ADDRESS.BITCOIN_ADDRESS],
});
