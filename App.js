import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomePage from './Pages/WelcomePage';
import SettingsPage from './Pages/SettingsPage';
import BottomNav from './components/BottomNavs';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }


  return (

<NavigationContainer >
<Stack.Navigator initialRouteName="Home">
  <Stack.Screen
    name="Home"
    component={BottomNav}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="WelcomePage"
    component={WelcomePage}
    options={{ headerShown: false, title: 'Welcome Page' }}
  />
   <Stack.Screen
    name="SettingsPage"
    component={SettingsPage}
    options={{ headerShown: false, title: 'Settings Page' }}
  />
</Stack.Navigator>
</NavigationContainer>

  );
}

