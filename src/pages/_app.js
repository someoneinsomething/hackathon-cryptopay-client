import App from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../utils/navigation';

import '../assets/css/main.css';

import { languageBrowserDetection, languageServerDetection } from '../utils/i18n';
import { initCurrencyFromCookie } from '../utils/currency';
import initStore from '../utils/redux';
import { setAutorizationHeader } from '../utils/request';
import { getCookie } from '../utils/cookie';
import { COOKIE_AUTH } from '../constants';
import routing from '../routes';
import { setAuthData } from '../actions/auth';
import { colors } from '../theme';
import { Header, RouteHandler, IntervalHanlder } from '../containers';

const isDev = process.env.NODE_ENV === 'development';

const themeUi = {
  ...createMuiTheme({
    palette: {
      primary: {
        main: colors.primary,
        light: '#E0EBFF',
        dark: '#3f19a5',
        contrastText: '#fff',
      },
      secondary: {
        main: '#FF782D',
        light: '#ff9357',
        dark: '#b2541f',
        contrastText: '#fff',
      },
      text: {
        primary: colors.textPrimary,
        secondary: colors.textGray,
      },
    },
    typography: {
      fontFamily: ['"Segoe UI"', 'sans-serif'].join(','),
    },
  }),
};

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);

    languageBrowserDetection();
  }

  // Fetching serialized(JSON) store state
  static async getInitialProps({ Component, ctx }) {
    initCurrencyFromCookie(ctx);
    languageServerDetection(ctx);

    const token = await getCookie(COOKIE_AUTH, ctx);
    await routing({ ...ctx, token });
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps({ ...ctx, token })
      : { token };

    await setAutorizationHeader(token);
    ctx.store.dispatch(setAuthData(token));

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <ReduxProvider store={store}>
        <ThemeProvider theme={themeUi}>
          <RouteHandler />
          <IntervalHanlder />
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    );
  }
}

export default withRedux(initStore, { debug: false })(MyApp);
