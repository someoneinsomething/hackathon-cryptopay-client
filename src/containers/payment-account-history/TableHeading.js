import React from 'react';

import { TableHead, TableRow, TableCell } from '../../components/tables';
import { Text } from '../../components';

export const TableHeading = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left" title="true">
          <Text tid="PAYMENT.TRANSACTION_HISTORY.TITLE.TRANSACTION" />
        </TableCell>
        <TableCell align="left" title="true">
          <Text tid="PAYMENT.TRANSACTION_HISTORY.TITLE.CONFIRM" />
        </TableCell>
        <TableCell align="left" title="true">
          <Text tid="PAYMENT.TRANSACTION_HISTORY.TITLE.AMOUNT" />
        </TableCell>
        <TableCell align="right" title="true">
          <Text tid="PAYMENT.TRANSACTION_HISTORY.TITLE.CREATED_AT" />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
