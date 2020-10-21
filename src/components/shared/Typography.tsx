import React from 'react';
import { APP_FONT_FAMILY } from '@app/Constants';
import { Text } from 'react-native-elements';

export const LightText = (props) => <Text style={styles.light} {...props} />;

export const SemiboldText = (props) => <Text style={styles.semiBold} {...props} />;

const styles = {
  semiBold: {
    fontFamily: APP_FONT_FAMILY.semiBold,
  },
  light: {
    fontFamily: APP_FONT_FAMILY.light,
  }
};
