import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import withStyledNavigator from '@components/shared/Header';
import { APP_SCREENS } from '@app/Constants';
import HomeScreen from './Home';
import DailyQuiz from './DailyQuiz';

const Stack = createStackNavigator();

const StyledNavigator = withStyledNavigator(Stack.Navigator);

const HomeNavigator = () => (
  <StyledNavigator>
    <Stack.Screen name={APP_SCREENS.home} component={HomeScreen} />
    <Stack.Screen name={APP_SCREENS.dailyQuiz} component={DailyQuiz} options={{ title: 'Daily Quiz' }} />
  </StyledNavigator>
);

export default HomeNavigator;
