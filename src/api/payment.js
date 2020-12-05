import { performWithPagination, getDateTime } from './index';
import { PAYMENT_TRANSACTION } from '../constants/fields';

export const performPaymentTransactionItem = (raw) => ({
  transaction: raw[PAYMENT_TRANSACTION.TRANSACTION],
  id: raw[PAYMENT_TRANSACTION.ID],
  amount: raw[PAYMENT_TRANSACTION.AMOUNT],
  confirm: Boolean(raw[PAYMENT_TRANSACTION.CONFIRM]),
  createDate: getDateTime(raw[PAYMENT_TRANSACTION.CREATE_DATE]),
});

export const performPaymentTransactionList = performWithPagination((raw) =>
  raw.map((item) => performPaymentTransactionItem(item)),
);
