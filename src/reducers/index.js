import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navigation from './navigation';
import auth from './auth';
import login from './login';
import signup from './signup';
import settingsUpdatePassword from './settingsUpdatePassword';
import accountInfo from './accountInfo';
import captcha from './captcha';
import accountBalance from './accountBalance';
import accountPaymentAddress from './accountPaymentAddress';
import accountPaymentHistory from './accountPaymentHistory';
import lang from './lang';
import currency from './currency';

export default combineReducers({
  form,
  navigation,
  auth,
  login,
  signup,
  settingsUpdatePassword,
  accountInfo,
  captcha,
  accountBalance,
  accountPaymentAddress,
  accountPaymentHistory,
  lang,
  currency,
});
