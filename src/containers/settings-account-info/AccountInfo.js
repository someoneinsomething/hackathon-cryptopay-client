import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListGrid } from '../../components/grids';
import { Text } from '../../components';
import { colors, sizes } from '../../theme';

export const AccountInfo = ({ nickname, email, id, login }) => {
  return (
    <React.Fragment>
      <ListGrid>
        <Field>
          <Heading>
            <Text tid="SETTINGS.ACCOUNT_INFO.ID" />
            :&nbsp;
          </Heading>
          <Info>{id}</Info>
        </Field>
        <Field>
          <Heading>
            <Text tid="SETTINGS.ACCOUNT_INFO.LOGIN" />
            :&nbsp;
          </Heading>
          <Info>{login}</Info>
        </Field>
        <Field>
          <Heading>
            <Text tid="SETTINGS.ACCOUNT_INFO.NICKNAME" />
            :&nbsp;
          </Heading>
          <Info>{nickname}</Info>
        </Field>
        <Field>
          <Heading>
            <Text tid="SETTINGS.ACCOUNT_INFO.EMAIL" />
            :&nbsp;
          </Heading>
          <Info>{email || <Text tid="SETTINGS.ACCOUNT_INFO.EMAIL_PLACEHOLDER" />}</Info>
        </Field>
      </ListGrid>
    </React.Fragment>
  );
};

AccountInfo.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string,
};

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  font-size: ${sizes.font.default};
  line-height: 140%;
  font-weight: 600;
  color: ${colors.textPrimary};
`;

const Info = styled.span`
  font-size: ${sizes.font.default};
  line-height: 140%;
  color: ${colors.textPrimary};
`;
