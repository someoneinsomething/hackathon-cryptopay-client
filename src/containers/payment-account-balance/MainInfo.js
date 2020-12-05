import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from '../../theme';
import { TotalBalance } from './TotalBalance';
import { WalletBalance } from './WalletBalance';

export const MainInfo = ({ data }) => (
  <React.Fragment>
    <Heading>
      <TotalBalance totalBalance={data.totalBalance} />
    </Heading>
    <WalletBalance bitcoinBalance={data.bitcoinBalance} />
  </React.Fragment>
);

MainInfo.propTypes = {
  data: PropTypes.object,
};

const Heading = styled.div`
  margin-bottom: ${spacing(1)};
`;
