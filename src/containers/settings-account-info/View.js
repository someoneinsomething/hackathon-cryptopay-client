import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import { Box } from '../../components/cards';
import { IndentLayout } from '../../components/layouts';
import { Loader } from '../../components';
import { SkeletonList } from '../../components/skeletons';
import { ListTitle } from '../../components/titles';

const LoaderComponent = () => (
  <React.Fragment>
    <Loader />
    <SkeletonList />
  </React.Fragment>
);

const AccountInfo = dynamic(() => import('./AccountInfo').then((module) => module.AccountInfo), {
  loading: LoaderComponent,
});

export const SettingsAccountInfoView = ({ loading, loaded, data }) => {
  return (
    <React.Fragment>
      <Box variant="outlined">
        <IndentLayout>
          <ListTitle tid="SETTINGS.ACCOUNT_INFO.TITLE" />
          {loading && <LoaderComponent />}
          {loaded && <AccountInfo {...data} />}
        </IndentLayout>
      </Box>
    </React.Fragment>
  );
};

SettingsAccountInfoView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  data: PropTypes.object,
};
