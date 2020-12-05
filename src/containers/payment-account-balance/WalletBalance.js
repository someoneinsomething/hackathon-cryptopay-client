import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../components';
import { spacing, sizes } from '../../theme';

export const WalletBalance = ({ bitcoinBalance }) => {
  return (
    <Container>
      <Item>
        <Text tid="PAYMENT.ACCOUNT_BALANCE.BITCOIN_BALANCE" values={{ bitcoinBalance }} />
      </Item>
    </Container>
  );
};

const Item = styled.div`
  font-size: ${sizes.font.default};
  &:not(:last-of-type) {
    margin-right: ${spacing(1)};
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

WalletBalance.propTypes = {
  bitcoinBalance: PropTypes.number.isRequired,
};
