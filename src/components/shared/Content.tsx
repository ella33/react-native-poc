import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { grey0 } from '@styles/colors';

const ScreenContent: React.FC = ({ children }) => (
  <ScrollView style={styles.main} contentContainerStyle={styles.content}>
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: grey0,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default ScreenContent;
