import React from 'react';
import PropTypes from 'prop-types';

import { SELECT_LANG_VALUES } from '../../constants/static';
import { LanguageTogglerView } from './View';

export const LanguageToggler = ({ activeLanguage, handleChangeLanguage = () => {} }) => {
  return (
    <LanguageTogglerView
      tabs={SELECT_LANG_VALUES}
      activeTab={activeLanguage}
      handleClick={handleChangeLanguage}
    />
  );
};

LanguageToggler.propTypes = {
  activeLanguage: PropTypes.number,
  handleChangeLanguage: PropTypes.func,
};
