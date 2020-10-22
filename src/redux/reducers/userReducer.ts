import { ACTION_TYPES } from '@redux/actions/user';
import { IUser } from '@redux/models/user';
import { ILoadable, createInitialState, withLoadableReducer } from './loadableReducer';

type UserStore = ILoadable<IUser> & { dailyQuizAnswer: string };

const initialState: UserStore  = {
  ...createInitialState(null),
  dailyQuizAnswer: '',
};

const baseUserReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.SEND_ANSWER:
      return {
        ...state,
        dailyQuizAnswer: action.data.answer,
      };
    default:
      return state;
  };
};

const userReducer = withLoadableReducer(
  baseUserReducer,
  {
    initiate: ACTION_TYPES.LOAD_USER,
    done: ACTION_TYPES.LOAD_USER_SUCCES,
    error: ACTION_TYPES.LOAD_USER_FAIL,
  },
);

export default userReducer;
