import React from 'react';
import { useDispatch } from 'react-redux';

import Head from '../../_head';
import { PAGE_TYPE } from '../../../constants/meta';
import { PageLayout, ContentLayout, SectionLayout, ResponsiveLayout } from '../../../components/layouts';
import { headerNavigatePath } from '../../../actions/navigation';
import { ROUTES } from '../../../constants/routes';
import { PaymentAccountBalance, PaymentAccountAddress, PaymentAccountHistory } from '../../../containers';

const PaymentPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.PAYMENT));
  }, []);

  return (
    <PageLayout>
      <Head id={PAGE_TYPE.PAYMENT} />
      <ContentLayout>
        <ResponsiveLayout size="medium">
          <SectionLayout indent>
            <PaymentAccountBalance />
            <PaymentAccountAddress />
            <PaymentAccountHistory />
          </SectionLayout>
        </ResponsiveLayout>
      </ContentLayout>
    </PageLayout>
  );
};

export default PaymentPage;
