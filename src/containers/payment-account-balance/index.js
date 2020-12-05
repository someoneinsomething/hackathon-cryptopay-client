import React from 'react';
import { useSelector } from 'react-redux';

import { PaymentAccountBalanceView } from './View';
import { getData, isRequestSuccess, isRequestPending } from '../../utils/store';

export const PaymentAccountBalance = () => {
  const { data, isDataLoading, isDataLoaded, pageLoading } = useSelector((state) => ({
    data: getData(state.accountBalance.data),
    isDataLoading: isRequestPending(state.accountBalance.data),
    isDataLoaded: isRequestSuccess(state.accountBalance.data),
    pageLoading: state.navigation.pageLoading,
  }));

  const getLoading = () => {
    return (pageLoading && !isDataLoaded) || isDataLoading;
  };

  return <PaymentAccountBalanceView data={data} loaded={isDataLoaded} loading={getLoading()} />;
};
