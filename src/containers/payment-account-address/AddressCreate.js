import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, sizes } from '../../theme';
import { Title } from '../../components/titles';
import { Text } from '../../components';
import { ButtonPrimary } from '../../components/buttons';

export const AddressCreate = ({ createAddress }) => {
  return (
    <Content>
      <Title offset={2} tid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.TITLE" />
      <Info>
        <Text tid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.CREATE_INFO" />
      </Info>
      <ButtonPrimary onClick={createAddress} size="large" variant="outlined" color="primary">
        <Text tid="PAYMENT.ACCOUNT_ADDRESS.BITCOIN.CREATE_BUTTON" />
      </ButtonPrimary>
    </Content>
  );
};

AddressCreate.propTypes = {
  createAddress: PropTypes.func.isRequired,
};

const Info = styled.div`
  font-size: ${sizes.font.small};
  margin-bottom: ${spacing(3)};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-start;
`;
