import React, { Component } from 'react';

import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';
import { PageLayout, ContentLayout, ResponsiveLayout, SectionLayout } from '../../components/layouts';

class HomePage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(headerNavigatePath(ROUTES.HOME));
    return {};
  }

  render() {
    return (
      <PageLayout>
        <Head id={PAGE_TYPE.HOME} />
        <ContentLayout>
          <ResponsiveLayout>
            <SectionLayout indent>Wellcome to Home Page!</SectionLayout>
          </ResponsiveLayout>
        </ContentLayout>
      </PageLayout>
    );
  }
}

export default HomePage;
