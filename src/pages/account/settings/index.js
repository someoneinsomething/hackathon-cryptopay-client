import React from 'react';
import { useDispatch } from 'react-redux';

import Head from '../../_head';
import { PAGE_TYPE } from '../../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../../components/layouts';
import {
  SettingsAccountInfo,
  SettingsLanguage,
  SettingsCurrency,
  SettingsUpdatePassword,
  Logout,
} from '../../../containers';
import { headerNavigatePath } from '../../../actions/navigation';
import { ROUTES } from '../../../constants/routes';

const SettingsPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.SETTINGS));
  }, []);

  return (
    <PageLayout>
      <Head id={PAGE_TYPE.SETTINGS} />
      <ContentLayout>
        <ResponsiveLayout size="medium">
          <SectionLayout indent>
            <SettingsAccountInfo />
            <SettingsLanguage />
            <SettingsCurrency />
            <SettingsUpdatePassword />
            <Logout />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default SettingsPage;
