import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Profile';
import withStyledNavigator from '../../components/shared/Header';

const Stack = createStackNavigator();

const StyledNavigator = withStyledNavigator(Stack.Navigator);

const ProfileNavigator = () => (
  <StyledNavigator>
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </StyledNavigator>
);

export default ProfileNavigator;
