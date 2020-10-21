import React, { useEffect } from 'react';
import actions from '@redux/actions/user';
import { useDispatch, useSelector } from 'react-redux'
import { Text } from 'react-native-elements';
import ScreenContent from '@components/shared/Content';
import LoadingIndicator from '@components/shared/LoadingIndicator';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(actions.loadUser(3));
  }, [dispatch]);

  return (
    <ScreenContent>
      <LoadingIndicator busy={user.loading}>
        <Text h1>Welcome {user.data?.userName}!</Text>
        <Text>Long time no see!</Text>
      </LoadingIndicator>
    </ScreenContent>
  );
};

export default HomeScreen;
