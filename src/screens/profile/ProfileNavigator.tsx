import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import withStyledNavigator from '@components/shared/Header';
import { APP_SCREENS } from '@app/Constants';
import ProfileScreen from './Profile';

const Stack = createStackNavigator();

const StyledNavigator = withStyledNavigator(Stack.Navigator);

const ProfileNavigator = () => (
  <StyledNavigator>
    <Stack.Screen name={APP_SCREENS.profile} component={ProfileScreen} />
  </StyledNavigator>
);

export default ProfileNavigator;
