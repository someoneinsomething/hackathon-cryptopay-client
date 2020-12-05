import Router from 'next/router';

import { redirect } from '../../utils/navigation';
import { ROUTES, QUERIES } from '../../constants/routes';

export const privated = (ctx) => {
  const { req, res, token, store } = ctx;

  const { linkBeforeAuth } = store.getState().navigation;

  if (!token && !linkBeforeAuth) {
    if (res) {
      res.writeHead(301, {
        Location: `${ROUTES.LOGIN}?${QUERIES.LINK_BEFORE_AUTH}=${req.url}`,
      });
      res.end();
    } else {
      redirect(`${ROUTES.LOGIN}?${QUERIES.LINK_BEFORE_AUTH}=${Router.asPath}`);
    }
  }
};
