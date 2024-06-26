import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';


const Setting = ({ name, isEnabled }) => {
  return (
    <View style={styles.settingContainer}>
      <Text style={[styles.settingName, { color: isEnabled ? '#ffffff' : '#000000' }]}>{name}</Text>
      <Image source={require('../assets/pictures/chevron.png')} style={styles.chevron} />
    </View>
  );
};

const styles = StyleSheet.create({
settingContainer:{
  borderBottomWidth: 0.5,
  borderBottomColor: '#afafaf',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  width: '100%',
  paddingBottom: 15,
  paddingTop: 25,
},

settingName:{
  fontSize: 20,
  fontFamily: 'Poppins-Medium',
  // backgroundColor:'red'
},

chevron:{
  width:20,
  height:20,
  // backgroundColor: 'red',
},


});

export default Setting;