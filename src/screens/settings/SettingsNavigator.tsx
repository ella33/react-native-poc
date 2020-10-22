import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import withStyledNavigator from '@components/shared/Header';
import { APP_SCREENS } from '@app/Constants';
import SettingsScreen from './Settings';

const Stack = createStackNavigator();

const StyledNavigator = withStyledNavigator(Stack.Navigator);

const SettingsNavigator = () => (
  <StyledNavigator>
    <Stack.Screen name={APP_SCREENS.settings} component={SettingsScreen} />
  </StyledNavigator>
);

export default SettingsNavigator;
