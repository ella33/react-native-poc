import React, { PropsWithChildren } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { primary } from '@styles/colors';

type Props = {
  busy: boolean;
};

const LoadingIndicator: React.FC<PropsWithChildren<Props>> = ({ children, busy }) => (
  <View style={styles.wrapper}>
    {busy
      ? (
        <View style={styles.loadingIndicatorWrapper}>
          <ActivityIndicator color={primary} size="large" />
        </View>
      )
      : children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  loadingIndicatorWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default LoadingIndicator;
