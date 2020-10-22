import { IUser } from '@redux/models/user';

export const ACTION_TYPES = {
  LOAD_USER: 'LOAD_USER',
  LOAD_USER_SUCCES: 'LOAD_USER_SUCCESS',
  LOAD_USER_FAIL: 'LOAD_USER_FAIL',
  SEND_ANSWER: 'SEND_ANSWER',
};

const userActions = {
  loadUser: (id: number) => ({ type: ACTION_TYPES.LOAD_USER, data: { id }}),
  loadUserSuccess: (data: IUser) => ({ type: ACTION_TYPES.LOAD_USER_SUCCES, data }),
  loadUserFail: () => ({ type: ACTION_TYPES.LOAD_USER_FAIL }),
  sendAnswer: (answer: string) => ({ type: ACTION_TYPES.SEND_ANSWER, data: { answer } }),
};

export default userActions;
