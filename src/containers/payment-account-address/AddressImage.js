import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import QRCode from 'qrcode.react';

export const AddressImage = ({ address }) => {
  return (
    <Image>
      <QRCode value={`bitcoin:${address}`} size="190" />
    </Image>
  );
};

AddressImage.propTypes = {
  address: PropTypes.string.isRequired,
};

const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  canvas {
    height: 190px !important;
    width: 190px !important;
  }
`;
