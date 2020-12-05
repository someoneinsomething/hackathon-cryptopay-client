import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import { colors, spacing } from '../../theme';

import { UserIcon } from './UserIcon';
import { UserBalance } from './UserBalance';

export const UserInfo = ({ onSelect }) => {
  return (
    <Container>
      <Actions>
        <IconButton size="small">
          <Badge variant="dot" color="primary" overlap="circle">
            <NotificationsNoneIcon style={{ color: colors.textGray }} />
          </Badge>
        </IconButton>
      </Actions>
      <Balance>
        <UserBalance />
      </Balance>

      <UserIcon onClick={onSelect} />
    </Container>
  );
};

UserInfo.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

const Actions = styled.div`
  border-right: 1px solid ${colors.border};
  padding: 0 ${spacing(2)};
  margin-right: ${spacing(3)};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Balance = styled.div`
  margin-right: ${spacing(3)};
`;
