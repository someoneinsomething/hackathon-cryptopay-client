import Router from 'next/router';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { universalLanguageDetect } from '@unly/universal-language-detector';

import { updateLanguage } from '../actions/lang';
import { getCookie } from './cookie';
import { QUERIES } from '../constants/routes';
import lang from '../../lang';
import { LANG } from '../constants/static';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: lang,
    fallbackLng: LANG.DEFAULT,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      lookupCookie: QUERIES.LANG,
      order: ['cookie'],
      caches: ['cookie'],
    },
  });

const determineLanguage = (req) =>
  universalLanguageDetect({
    supportedLanguages: [LANG.RU, LANG.EN],
    fallbackLanguage: LANG.DEFAULT,
    acceptLanguageHeader: req.headers['accept-language'],
  });

export const languageBrowserDetection = () => {
  if (typeof window !== 'undefined') {
    const language = Router.asPath.split(`?${QUERIES.LANG}=`)[1];
    if (language) {
      i18n.changeLanguage(language.toLowerCase());
      Router.push(Router.asPath.split(`?${QUERIES.LANG}=`)[0]);
    }
  }
};

export const languageServerDetection = (ctx) => {
  if (typeof window === 'undefined') {
    const cookieLanguage = getCookie(QUERIES.LANG, ctx);
    if (!cookieLanguage) {
      const language = determineLanguage(ctx.req);
      const queryLanguage = ctx.req.url.split(`?${QUERIES.LANG}=`)[1];

      if (!queryLanguage) {
        ctx.res.writeHead(302, { Location: `${ctx.req.url}?${QUERIES.LANG}=${language}` });
        ctx.res.end();
      }

      i18n.changeLanguage(language);
      ctx.store.dispatch(updateLanguage(language));
    } else {
      i18n.changeLanguage(cookieLanguage);
      ctx.store.dispatch(updateLanguage(cookieLanguage));
    }
  }
};

export { i18n };
