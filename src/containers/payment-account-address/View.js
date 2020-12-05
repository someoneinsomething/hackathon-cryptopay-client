import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { Loader } from '../../components';
import { SkeletonList } from '../../components/skeletons';

const LoaderComponent = () => (
  <React.Fragment>
    <Loader />
    <SkeletonList />
  </React.Fragment>
);

const MainInfo = dynamic(() => import('./MainInfo').then((module) => module.MainInfo), {
  loading: LoaderComponent,
});

export const PaymentAccountAddressView = ({ loading, loaded, data, createAddress }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          {loading && <LoaderComponent />}
          {loaded && <MainInfo data={data} createAddress={createAddress} />}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

PaymentAccountAddressView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  data: PropTypes.object,
  createAddress: PropTypes.func.isRequired,
};
