import React, { PropsWithChildren } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { primary } from '@styles/colors';

type Props = {
  busy: boolean;
};

const LoadingIndicator: React.FC<PropsWithChildren<Props>> = ({ children, busy }) => (
  <View style={styles.wrapper}>
    {busy ? <ActivityIndicator color={primary} size="large" /> : children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoadingIndicator;
