import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizes } from '../../theme';
import { Table, TablePagination } from '../../components/tables';
import { TableHeading } from './TableHeading';
import { TableContent } from './TableContent';
import { SkeletonContent } from './Skeleton';

export const History = ({ paginationCache, paginationList, loading, loaded, loadData }) => (
  <React.Fragment>
    <Overflow>
      <Content>
        <Table>
          <TableHeading />
          {loading && <SkeletonContent />}
          {loaded && <TableContent items={paginationList} empty={paginationCache.amountItems === 0} />}
        </Table>
      </Content>
    </Overflow>
    {paginationCache.amountItems > paginationCache.take && (
      <TablePagination
        rowsPerPageOptions={[paginationCache.take]}
        count={paginationCache.amountItems}
        rowsPerPage={paginationCache.take}
        page={paginationCache.currentPage}
        onChangePage={(e, page) => loadData(page)}
      />
    )}
  </React.Fragment>
);

History.propTypes = {
  paginationCache: PropTypes.object,
  paginationList: PropTypes.array,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  loadData: PropTypes.func,
};

const Overflow = styled.div`
  overflow: auto;
  @media all and (min-width: ${sizes.layout.medium}) {
    overflow: unset;
  }
`;
const Content = styled.div`
  min-width: ${sizes.layout.medium};
`;
