import { ROUTES } from '../constants/routes';

import initRouter from './router';

import { privated, auth, accountRecoveryConfirm, accountRecoveryUpdate } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.HOME]: [],
  [ROUTES.LOGIN]: [auth],
  [ROUTES.SIGNUP]: [auth],
  [ROUTES.RECOVERY_ACCOUNT_RESET]: [auth],
  [ROUTES.RECOVERY_ACCOUNT_CONFIRM]: [auth, accountRecoveryConfirm],
  [ROUTES.RECOVERY_ACCOUNT_UPDATE]: [auth, accountRecoveryUpdate],
  [ROUTES.SETTINGS]: [privated],
  [ROUTES.PAYMENT]: [privated],
  [ROUTES.LOGOUT]: [privated],
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
