import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, sizes } from '../../theme';
import { Title } from '../../components/titles';
import { CopyField } from '../../components/fields';
import { Text } from '../../components';
import { AddressImage } from './AddressImage';

export const AddressInfo = ({ address }) => {
  return (
    <Grid>
      <AddressImage address={address} />
      <Content>
        <Title offset={3} tid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.TITLE" />
        <CopyField
          fullWidth
          value={address}
          tid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.ADDRESS_COPIED"
          alertTid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.ADDRESS_COPIED"
        />
        <Info>
          <Text tid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.HELPER_TEXT" />
        </Info>
      </Content>
    </Grid>
  );
};

AddressInfo.propTypes = {
  address: PropTypes.string.isRequired,
};

const Info = styled.div`
  font-size: ${sizes.font.small};
  margin-top: ${spacing(3)};
`;

const Content = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;

  @media all and (min-width: 480px) {
    grid-template-columns: 190px auto;
    grid-gap: ${spacing(6)};
  }

  @media all and (max-width: 479px) {
    grid-template-columns: 1fr;
    grid-gap: ${spacing(2)};
  }
`;
