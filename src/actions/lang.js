import { LANGUAGE } from './index';

export const updateLanguage = (lang) => {
  return {
    type: LANGUAGE.UPDATE_ACTIVE_LANG,
    lang,
  };
};
