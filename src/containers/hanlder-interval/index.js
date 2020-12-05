import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { OBSERVE_INTERVAL } from '../../constants';
import { getAccountBalance, updateAccountBalance } from '../../actions/accountBalance';

class IntervalHanlderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balanceObserveId: null,
    };
  }

  componentDidMount() {
    const { logged } = this.props;

    if (logged) {
      this.balanceObserve();
    }
  }

  componentDidUpdate(prev) {
    const { logged } = this.props;
    const { balanceObserveId } = this.state;

    if (prev.logged === false && logged === true) {
      this.balanceObserve();
    }

    if (prev.logged === true && logged === false) {
      clearInterval(balanceObserveId);
    }
  }

  componentWillUnmount() {
    const { balanceObserveId } = this.state;
    clearInterval(balanceObserveId);
  }

  balanceObserve = () => {
    const { dispatch } = this.props;
    dispatch(getAccountBalance());

    const id = setInterval(() => {
      dispatch(updateAccountBalance());
    }, OBSERVE_INTERVAL.ACCOUNT_BALANCE);

    this.setState({ balanceObserveId: id });
  };

  render() {
    return null;
  }
}

const mapStateToProps = ({ auth: { logged } }) => ({
  logged,
});

IntervalHanlderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  logged: PropTypes.bool,
};

export const IntervalHanlder = compose(connect(mapStateToProps))(IntervalHanlderContainer);
