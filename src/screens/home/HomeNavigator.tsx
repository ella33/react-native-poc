import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import withStyledNavigator from '../../components/shared/Header';

const Stack = createStackNavigator();

const StyledNavigator = withStyledNavigator(Stack.Navigator);

const HomeNavigator = () => (
  <StyledNavigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </StyledNavigator>
);

export default HomeNavigator;
