import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './Settings';
import withStyledNavigator from '../../components/shared/Header';

const Stack = createStackNavigator();

const StyledNavigator = withStyledNavigator(Stack.Navigator);

const SettingsNavigator = () => (
  <StyledNavigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </StyledNavigator>
);

export default SettingsNavigator;
