import React, { useCallback, useEffect } from 'react';
import userActions from '@redux/actions/user';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Text } from 'react-native-elements';
import ScreenContent from '@components/shared/Content';
import { Paragraph } from '@components/shared/Layout';
import LoadingIndicator from '@components/shared/LoadingIndicator';
import { APP_SCREENS } from '@app/Constants';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userActions.loadUser(3));
  }, [dispatch]);

  const goToDailyQuiz = useCallback(() => {
    navigation.navigate(APP_SCREENS.dailyQuiz);
  }, []);

  return (
    <ScreenContent>
      <LoadingIndicator busy={user.loading}>
        <Text h1>Welcome {user.data?.userName}!</Text>
        <Paragraph>
          <Text>Long time no see!</Text>
        </Paragraph>

        <Button
          title="Daily Quiz"
          onPress={goToDailyQuiz}
        />
      </LoadingIndicator>
    </ScreenContent>
  );
};

export default HomeScreen;
