import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAccountInfo } from '../../actions/accountInfo';
import { SettingsAccountInfoView } from './View';
import { getData, isRequestSuccess, isRequestPending } from '../../utils/store';

export const SettingsAccountInfo = () => {
  const { data, isDataLoading, isDataLoaded, pageLoading } = useSelector((state) => ({
    data: getData(state.accountInfo.data),
    isDataLoading: isRequestPending(state.accountInfo.data),
    isDataLoaded: isRequestSuccess(state.accountInfo.data),
    pageLoading: state.navigation.pageLoading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAccountInfo());
  }, []);

  const getLoading = () => {
    return (pageLoading && !isDataLoaded) || isDataLoading;
  };

  return <SettingsAccountInfoView data={data} loaded={isDataLoaded} loading={getLoading()} />;
};
