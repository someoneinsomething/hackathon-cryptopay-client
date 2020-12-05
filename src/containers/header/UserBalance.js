import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { sizes } from '../../theme';
import { ROUTES } from '../../constants/routes';
import { Link, Text } from '../../components';
import { Skeleton } from '../../components/skeletons';
import { getData, isRequestSuccess, isRequestPending } from '../../utils/store';

export const UserBalance = () => {
  const { balance, loadingData, loaded, pageLoading } = useSelector(({ accountBalance, navigation }) => ({
    balance: getData(accountBalance.data),
    loadingData: isRequestPending(accountBalance.data),
    loaded: isRequestSuccess(accountBalance.data),
    pageLoading: navigation.pageLoading,
  }));

  const loading = (pageLoading && !loadingData && !loaded) || loadingData;

  return (
    <Balance href={ROUTES.PAYMENT} underline="none">
      {loaded && <Text tid="NAVIGATION.BALANCE" values={{ balance: balance.totalBalance }} />}
      {loading && <Skeleton variant="text" height={18} width={36} />}
    </Balance>
  );
};

const Balance = styled(Link)`
  && {
    display: flex;
    align-items: center;
    font-size: ${sizes.font.small};
    font-weight: 600;
  }
`;
