import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Title } from '../../components/titles';
import { Text } from '../../components';
import { colors, sizes } from '../../theme';

export const TotalBalance = ({ totalBalance }) => {
  return (
    <Container>
      <Title tid="PAYMENT.ACCOUNT_BALANCE.TITLE" />
      <div>
        <Balance>
          <Text tid="PAYMENT.ACCOUNT_BALANCE.TOTAL_BALANCE" values={{ totalBalance }} />
        </Balance>
      </div>
    </Container>
  );
};

const Balance = styled.div`
  font-size: ${sizes.font.default};
  color: ${colors.primary};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

TotalBalance.propTypes = {
  totalBalance: PropTypes.number.isRequired,
};
