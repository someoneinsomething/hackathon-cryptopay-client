import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PaymentAccountAddressView } from './View';
import { getData, isRequestSuccess, isRequestPending } from '../../utils/store';
import { getAccountPaymentAddress, createBitcoinPaymentAddress } from '../../actions/accountPaymentAddress';

export const PaymentAccountAddress = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAccountPaymentAddress());
  }, []);

  const { data, isDataLoading, isDataLoaded, pageLoading } = useSelector(
    ({ accountPaymentAddress, navigation }) => ({
      data: getData(accountPaymentAddress.data),
      isDataLoading: isRequestPending(accountPaymentAddress.data),
      isDataLoaded: isRequestSuccess(accountPaymentAddress.data),
      pageLoading: navigation.pageLoading,
    }),
  );

  const createAddress = () => {
    dispatch(createBitcoinPaymentAddress());
  };

  const getLoading = () => {
    return (pageLoading && !isDataLoaded) || isDataLoading;
  };

  return (
    <PaymentAccountAddressView
      createAddress={createAddress}
      data={data}
      loaded={isDataLoaded}
      loading={getLoading()}
    />
  );
};
