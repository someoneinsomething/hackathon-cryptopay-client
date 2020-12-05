import { SETTINGS_UPDATE_PASSWORD } from '../constants/fields';

export const convertSettingsUpdatePasswordData = ({ password }) => ({
  [SETTINGS_UPDATE_PASSWORD.PASSWORD]: password,
});
