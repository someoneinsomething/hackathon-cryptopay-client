import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { PaymentAccountHistoryView } from './View';
import { getData, isRequestSuccess, isRequestPending, isUpdatePending } from '../../utils/store';
import { PAGINATION_OFFSET } from '../../constants/routes';
import { OBSERVE_INTERVAL } from '../../constants';
import { updateAccountPaymentHistory, getAccountPaymentHistory } from '../../actions/accountPaymentHistory';

class PaymentAccountHistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
    };
  }

  componentDidUpdate(prev) {
    const { isAddressLoaded, paymentAddress, dispatch } = this.props;
    const { intervalId } = this.state;
    if (prev.isAddressLoaded !== true && isAddressLoaded === true) {
      if (paymentAddress.bitcoinAddress !== null) {
        dispatch(getAccountPaymentHistory({ skip: 0, take: PAGINATION_OFFSET.PAYMENT_TRANSACTION }));

        if (intervalId === null) {
          this.setLoadInterval(0);
        }
      }
    }
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  loadData = (page) => {
    const { dispatch } = this.props;
    dispatch(
      updateAccountPaymentHistory({
        skip: PAGINATION_OFFSET.PAYMENT_TRANSACTION * page,
        take: PAGINATION_OFFSET.PAYMENT_TRANSACTION,
      }),
    );
    this.setLoadInterval(page);
  };

  setLoadInterval = (page) => {
    const { intervalId } = this.state;

    if (intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      this.loadData(page);
    }, OBSERVE_INTERVAL.ACCOUNT_PAYMENT_HISTORY);

    this.setState({ intervalId: id });
  };

  isDataLoading = () => {
    const { isDataLoading, isDataLoaded } = this.props;

    return isDataLoading || !isDataLoaded;
  };

  render() {
    const {
      pageLoading,
      isAddressLoaded,
      isAddressLoading,
      paymentAddress,
      dataUpdating,
      data,
      isDataLoaded,
    } = this.props;

    if (isAddressLoaded && paymentAddress.bitcoinAddress === null) {
      return null;
    }

    return (
      <PaymentAccountHistoryView
        data={data}
        dataLoading={this.isDataLoading()}
        dataLoaded={isDataLoaded}
        loading={pageLoading || isAddressLoading}
        loaded={!pageLoading && isAddressLoaded}
        updating={dataUpdating}
        loadData={this.loadData}
      />
    );
  }
}

const mapStateToProps = ({
  accountPaymentHistory: { data },
  navigation: { pageLoading },
  accountPaymentAddress,
}) => ({
  pageLoading,
  data: getData(data),
  isDataLoading: isRequestPending(data),
  isDataLoaded: isRequestSuccess(data),
  isAddressLoaded: isRequestSuccess(accountPaymentAddress.data),
  isAddressLoading: isRequestPending(accountPaymentAddress.data),
  paymentAddress: getData(accountPaymentAddress.data),
  dataUpdating: isUpdatePending(data),
});

PaymentAccountHistoryContainer.propTypes = {
  pageLoading: PropTypes.bool,
  data: PropTypes.object,
  paymentAddress: PropTypes.object,
  isDataLoading: PropTypes.bool,
  isDataLoaded: PropTypes.bool,
  isAddressLoading: PropTypes.bool,
  isAddressLoaded: PropTypes.bool,
  dataUpdating: PropTypes.bool,
  dispatch: PropTypes.func,
};

export const PaymentAccountHistory = compose(connect(mapStateToProps))(PaymentAccountHistoryContainer);
