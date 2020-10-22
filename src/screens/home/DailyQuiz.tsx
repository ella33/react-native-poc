import React, { useCallback, useRef } from 'react';
import userActions from '@redux/actions/user';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Text } from 'react-native-elements';
import ScreenContent from '@components/shared/Content';

const DailyQuizScreen = () => {
  const dispatch = useDispatch();
  const answer = useRef('');
  const dailyAnswer = useSelector(state => state.user.dailyQuizAnswer);

  const onChangeAnswer = useCallback((text) => {
    answer.current = text;
  }, []);

  const onSubmit = useCallback(() => {
    if (answer.current) {
      dispatch(userActions.sendAnswer(answer.current));
    }
  }, [dispatch]);

  return (
    <ScreenContent>
      {!dailyAnswer.length && (
        <>
          <Input placeholder="What did you have for breakfast?" onChangeText={(text) => onChangeAnswer(text)} />
          <Button title="Send" onPress={onSubmit} />
        </>
      )}
      {(dailyAnswer.length > 0) && <Text h4>{dailyAnswer} was an excellent choice!</Text>}
    </ScreenContent>
  );
};

export default DailyQuizScreen;
