import React from 'react';
import { View } from 'react-native';

export const Paragraph = (props) => <View style={styles.paragraph} {...props} />;

export const Section = (props) => <View style={styles.section} {...props} />;

const styles = {
  paragraph: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  section: {
    paddingVertical: 20,
  },
};