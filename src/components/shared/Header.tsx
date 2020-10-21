import React from 'react';
import { primary, white } from '@styles/colors';
import { APP_FONT_FAMILY } from '@app/Constants';

const screenOptions = {
  headerStyle: {
    backgroundColor: primary,
  },
  headerTitleStyle: {
    fontFamily: APP_FONT_FAMILY.light
  },
  headerTintColor: white,
};

const withHeaderStyle = (StackComponent) => (props) => (
  <StackComponent screenOptions={screenOptions} {...props} />
);

export default withHeaderStyle;
