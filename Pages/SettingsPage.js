import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from 'react-native';
import Setting from "../components/setting";

const SettingsPage = ({ navigation, isDarkMode, setIsDarkMode }) => {
  const toggleSwitch = () => setIsDarkMode(!isDarkMode);


  const handleLogin = () => {
    navigation.navigate('SettingsPage');
  };
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? "#00010a" : "#fafafa" }]}>
      <View style={styles.page}>
        <View style={styles.pageTitle}>
          <Text style={[styles.title, { color: isDarkMode ? "#ffffff" : "#000000" }]}>Settings</Text>
        </View>

        <View>
          <Setting name="Language" isEnabled={isDarkMode} />
          <Setting name="My Profile" isEnabled={isDarkMode} />
          <Setting name="Contact Us" isEnabled={isDarkMode} />
          <Setting name="Change Password" isEnabled={isDarkMode} />
          <Setting name="Privacy Policy" isEnabled={isDarkMode} />
        </View>

        <View style={styles.themeArea}>
          <Text style={[styles.title, { color: isDarkMode ? "#ffffff" : "#000000" }]}>Theme</Text>
          <Switch
            trackColor={{ false: "#afafaf", true: "#39ff14" }}
            thumbColor={isDarkMode ? "#fafafa" : "#f4f3f4"}
            ios_backgroundColor="#afafaf"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  page: {
    marginTop: 20,
    marginRight: 25,
    marginLeft: 25,
  },
  pageTitle: {
    marginTop: 60,
    marginBottom: 100,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
  },
  themeArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 15,
    marginTop: 55,
  },
});

export default SettingsPage;
