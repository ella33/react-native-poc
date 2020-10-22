import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Icon, ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import HomeNavigator from '@screens/home/HomeNavigator';
import SettingsNavigator from '@screens/settings/SettingsNavigator';
import ProfileNavigator from '@screens/profile/ProfileNavigator';
import theme from '@styles/theme';
import { APP_FONT_FAMILY, API_BASE_URL, APP_SCREENS } from '@app/Constants';
import axios from 'axios';

axios.defaults.baseURL = API_BASE_URL;

const tabBarOptions = {
  activeTintColor: theme.colors.white,
  style: {
    height: 60,
    backgroundColor: theme.colors.black,
    borderTopColor: theme.colors.black,
  },
};

const tabOptions = {
  home: {
    tabBarLabel: '',
    tabBarIcon: (props) => <Icon name="home" {...props} />,
  },
  settings: {
    tabBarLabel: '',
    tabBarIcon: (props) => <Icon name="settings" {...props} />,
  },
  profile: {
    tabBarLabel: '',
    tabBarIcon: (props) => <Icon name="account-circle" {...props} />,
  },
};

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    [APP_FONT_FAMILY.regular]: require('./assets/fonts/Quicksand.ttf'),
    [APP_FONT_FAMILY.bold]: require('./assets/fonts/Quicksand-Bold.ttf'),
    [APP_FONT_FAMILY.light]: require('./assets/fonts/Quicksand-Light.ttf'),
    [APP_FONT_FAMILY.medium]: require('./assets/fonts/Quicksand-Medium.ttf'),
    [APP_FONT_FAMILY.semiBold]: require('./assets/fonts/Quicksand-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen options={tabOptions.home} name={APP_SCREENS.home} component={HomeNavigator} />
            <Tab.Screen options={tabOptions.settings} name={APP_SCREENS.settings} component={SettingsNavigator} />
            <Tab.Screen options={tabOptions.profile} name={APP_SCREENS.profile} component={ProfileNavigator} />
          </Tab.Navigator>
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
