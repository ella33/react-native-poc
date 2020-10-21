import { IUser } from '@redux/models/user';

export const ACTION_TYPES = {
  LOAD_USER: 'LOAD_USER',
  LOAD_USER_SUCCES: 'LOAD_USER_SUCCESS',
  LOAD_USER_FAIL: 'LOAD_USER_FAIL',
};

const actions = {
  loadUser: (id) => ({ type: ACTION_TYPES.LOAD_USER, data: { id }}),
  loadUserSuccess: (data: IUser) => ({ type: ACTION_TYPES.LOAD_USER_SUCCES, data }),
  loadUserFail: () => ({ type: ACTION_TYPES.LOAD_USER_FAIL }),
};

export default actions;
