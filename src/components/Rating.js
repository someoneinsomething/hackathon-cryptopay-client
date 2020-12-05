import React from 'react';
import styled from 'styled-components';

import MaterialRating from '@material-ui/lab/Rating';
import { colors } from '../theme';

export const Rating = ({ ...props }) => {
  return <StyledRating readOnly {...props} />;
};

const StyledRating = styled(MaterialRating)`
  .MuiRating-label,
  .MuiRating-iconFilled {
    color: ${colors.primary};
  }
`;
