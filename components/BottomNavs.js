import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import WelcomePage from '../Pages/WelcomePage';
import SettingsPage from '../Pages/SettingsPage';

const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#00010a',
    // Other styles as needed
  },
});

function BottomNav() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Home' 
        options={{
          tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../assets/pictures/home.png')} 
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
          headerShown: false 
        }}
      >
        {(props) => <WelcomePage {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen> 
      <Tab.Screen 
        name='My Cards' 
        options={{ 
          tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../assets/pictures/myCards.png')} 
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
          headerShown: false 
        }}
      >
        {(props) => <WelcomePage {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen>
      <Tab.Screen 
        name='Statistics' 
        options={{ 
          tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../assets/pictures/statictics.png')} 
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
          headerShown: false 
        }}
      >
        {(props) => <WelcomePage {...props} isDarkMode={isDarkMode} />}
      </Tab.Screen>
      <Tab.Screen 
        name='Settings' 
        options={{ 
          tabBarStyle: styles.tabBarStyle,
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('../assets/pictures/settings.png')} 
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
          headerShown: false 
        }}
      >
        {(props) => <SettingsPage {...props} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomNav;
