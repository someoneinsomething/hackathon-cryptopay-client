import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import { Box } from '../../components/cards';
import { Table } from '../../components/tables';
import { Loader } from '../../components';

import { SkeletonContent, SkeletonHeading } from './Skeleton';

const LoaderComponent = () => (
  <React.Fragment>
    <Loader />
    <Table>
      <SkeletonHeading />
      <SkeletonContent />
    </Table>
  </React.Fragment>
);

const History = dynamic(() => import('./History').then((module) => module.History), {
  loading: LoaderComponent,
});

export const PaymentAccountHistoryView = ({
  loading,
  dataLoading,
  loaded,
  dataLoaded,
  data,
  updating,
  loadData,
}) => {
  const [paginationCache, setPaginationCache] = React.useState({
    amountItems: 0,
    amountPages: 0,
    currentPage: 0,
    take: 0,
    page: 0,
  });

  React.useEffect(() => {
    if (dataLoaded === true && updating !== true) {
      setPaginationCache(data.pagination);
    }
  }, [dataLoaded, updating]);

  return (
    <React.Fragment>
      <Box variant="outlined">
        <Container>
          {updating && <Loader />}
          {loading && !dataLoaded && <LoaderComponent />}
          {(loaded || dataLoaded) && (
            <History
              paginationCache={paginationCache}
              paginationList={data.list}
              loading={dataLoading}
              loaded={dataLoaded}
              loadData={loadData}
            />
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
};

PaymentAccountHistoryView.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  updating: PropTypes.bool,
  dataLoaded: PropTypes.bool,
  dataLoading: PropTypes.bool,
  data: PropTypes.object,
  loadData: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: grid;
`;
