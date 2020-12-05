import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Box } from '../../components/cards';
import { Text } from '../../components';
import { Tabs as TabsComponent, Tab as TabComponent } from '../../components/tabs';
import { spacing } from '../../theme';

export const LanguageTogglerView = ({ tabs, activeTab, handleClick, offset = 3 }) => {
  return (
    <Container offset={offset}>
      <Box>
        <Tabs value={activeTab}>
          {tabs.map(({ id, tid }) => (
            <Tab
              key={id}
              active={id === activeTab}
              component="span"
              label={<Text tid={tid} />}
              onClick={() => handleClick(id)}
              value={id}
            />
          ))}
        </Tabs>
      </Box>
    </Container>
  );
};

LanguageTogglerView.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.number,
  handleClick: PropTypes.func,
  offset: PropTypes.number,
};

const Container = styled.div`
  margin-bottom: ${({ offset }) => spacing(offset)};
`;
const Tabs = styled(TabsComponent)`
  height: 48px !important;
  min-height: 48px !important;
`;
const Tab = styled(TabComponent)`
  &.MuiTab-root {
    padding: 0 !important;
    min-width: 100px !important;
  }
`;
