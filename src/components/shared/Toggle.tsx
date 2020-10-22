import React, { useCallback, useState } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, Switch, SwitchProps } from 'react-native';
import { Paragraph } from '@components/shared/Layout';
import { secondary, primary, black, white } from '@styles/colors';

type Props = SwitchProps & {
  label: string;
  defaultValue: boolean;
};

const trackColor = { true: secondary, false: black };

const Toggle: React.FC<Props> = (props) => {
  const { label, defaultValue } = props;
  const [status, setStatus] = useState(defaultValue);

  const thumbColor = status ? primary : white;

  const toggleSwitch = useCallback(() => setStatus((previousState) => !previousState), []);

  return (
    <Paragraph>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={status}
        onValueChange={toggleSwitch}
        trackColor={trackColor}
        thumbColor={thumbColor}
      />
    </Paragraph>
  )
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
  },
});

export default Toggle;
