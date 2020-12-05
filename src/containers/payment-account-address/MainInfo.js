import React from 'react';
import PropTypes from 'prop-types';

import { AddressInfo } from './AddressInfo';
import { AddressCreate } from './AddressCreate';

export const MainInfo = ({ data, createAddress }) => (
  <React.Fragment>
    {data.bitcoinAddress ? (
      <AddressInfo address={data.bitcoinAddress} />
    ) : (
      <AddressCreate createAddress={createAddress} />
    )}
  </React.Fragment>
);

MainInfo.propTypes = {
  data: PropTypes.object,
  createAddress: PropTypes.func,
};
