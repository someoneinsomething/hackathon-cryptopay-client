import React from 'react';
import styled from 'styled-components';

import PersonSharpIcon from '@material-ui/icons/PersonSharp';

import { colors, sizes } from '../../theme';

export const UserIcon = ({ ...props }) => {
  return (
    <Icon {...props}>
      <PersonSharpIcon style={{ color: '#fff', fontSize: '22px' }} />
    </Icon>
  );
};

const Icon = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray};
  border-radius: 50%;
  transition: ${sizes.transition.default};

  &:hover {
    opacity: ${sizes.opacity.default};
  }
`;
