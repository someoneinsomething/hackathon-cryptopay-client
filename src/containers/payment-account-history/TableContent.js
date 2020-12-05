import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TableBody, TableRow, TableCell } from '../../components/tables';
import { Text } from '../../components';
import { colors } from '../../theme';

export const TableContent = ({ items, empty }) => {
  return (
    <TableBody>
      {!empty ? (
        <React.Fragment>
          {items.map(({ id, transaction, confirm, amount, createDate }) => (
            <React.Fragment key={id}>
              <TableRow>
                <TableCell align="left" style={{ maxWidth: '300px' }}>
                  <span
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '350px',
                      display: 'block',
                    }}
                  >
                    {transaction}
                  </span>
                </TableCell>
                <TableCell align="left">
                  <StatusText confirm={confirm}>
                    {confirm ? (
                      <Text tid="PAYMENT.TRANSACTION_HISTORY.DATA.CONFIRMED" />
                    ) : (
                      <Text tid="PAYMENT.TRANSACTION_HISTORY.DATA.CONFIRM_PENDING" />
                    )}
                  </StatusText>
                </TableCell>
                <TableCell align="left">
                  <Text tid="PAYMENT.TRANSACTION_HISTORY.DATA.AMOUNT" values={{ amount }} />
                </TableCell>
                <TableCell align="right">{createDate}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TableRow>
            <TableCell colSpan={100}>
              <Text tid="PAYMENT.TRANSACTION_HISTORY.EMPTY_LIST" />
            </TableCell>
          </TableRow>
        </React.Fragment>
      )}
    </TableBody>
  );
};

const StatusText = styled.div`
  color: ${(p) => (p.confirm ? colors.active : colors.error)};
`;

TableContent.propTypes = {
  empty: PropTypes.bool,
  items: PropTypes.array.isRequired,
};
