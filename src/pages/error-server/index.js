import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from '../_head';

import { PAGE_TYPE } from '../../constants/meta';
import { PageLayout } from '../../components/layouts';
import { Error } from '../../containers';
import { headerNavigatePath } from '../../actions/navigation';
import { ROUTES } from '../../constants/routes';

const ErrorNotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(headerNavigatePath(ROUTES.SERVER_ERROR));
  }, []);

  return (
    <PageLayout align="center">
      <Head id={PAGE_TYPE.SERVER_ERROR} />
      <Error status={500} />
    </PageLayout>
  );
};

export default ErrorNotFound;
