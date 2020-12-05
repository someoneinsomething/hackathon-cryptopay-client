import Router from 'next/router';

import { redirect } from '../../utils/navigation';
import { ROUTES, QUERIES } from '../../constants/routes';
import { setLinkBeforeAuth } from '../../actions/navigation';

export const auth = (ctx) => {
  const {
    req,
    res,
    token,
    store: { dispatch },
  } = ctx;

  if (req) {
    const linkBeforeAuth = req.url.split('?').find((item) => item.includes(QUERIES.LINK_BEFORE_AUTH));

    if (linkBeforeAuth) {
      dispatch(setLinkBeforeAuth(linkBeforeAuth.split(`${QUERIES.LINK_BEFORE_AUTH}=`)[1]));
    }
  } else {
    const linkBeforeAuth = Router.asPath.split('?').find((item) => item.includes(QUERIES.LINK_BEFORE_AUTH));
    if (linkBeforeAuth) {
      dispatch(setLinkBeforeAuth(linkBeforeAuth.split(`${QUERIES.LINK_BEFORE_AUTH}=`)[1]));
    }
  }

  if (token) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.LOGOUT,
      });
      res.end();
    } else {
      redirect(ROUTES.LOGOUT);
    }
  }
};
