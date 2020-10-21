import { ACTION_TYPES } from '@redux/actions/user';
import { IUser } from '@redux/models/user';
import { ILoadable, createInitialState, withLoadableReducer } from './loadableReducer';

const initialState: ILoadable<IUser> = createInitialState(null);

const baseUserReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
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
