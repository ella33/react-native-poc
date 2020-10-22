import React from 'react';
import { Text } from 'react-native-elements';
import ScreenContent from '@components/shared/Content';
import Toggle from '@components/shared/Toggle';

const SettingsScreen = () => {
  return (
    <ScreenContent>
      <Text h1>User preferences</Text>
      <Toggle label="Notifications" defaultValue={false} />
      <Toggle label="Daily Quiz" defaultValue={true} />
      <Toggle label="Collect usage data" defaultValue={false} />
    </ScreenContent>
  );
};

export default SettingsScreen;
