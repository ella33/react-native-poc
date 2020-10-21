import React from 'react';
import { View } from 'react-native';

export const Paragraph = (props) => <View style={styles.paragraph} {...props} />

const styles = {
  paragraph: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
};