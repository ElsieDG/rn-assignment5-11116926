import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const Button = ({ image, buttonName, isEnabled, imgWidth = 50, imgHeight = 50 }) => {
  return (
    <View style={styles.buttonArea}>
      <View style={[styles.button, { backgroundColor: isEnabled ? 'rgba(22,22,34,0.5)' : '#EEEEEE' }]}>
        <Image source={image} style={[{width: imgWidth}, {height: imgHeight}, isEnabled && styles.invertedImage]} />
      </View>
      <Text style={[styles.buttonName, { color: isEnabled ? '#ffffff' : '#000000' }]}>{buttonName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  buttonArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  button: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE', // Default background color
    marginBottom: 5,
  },


  invertedImage: {
    tintColor: '#ffffff', // Inverts the image color to white in dark mode
  },

  buttonName: {
    fontSize: 12,
    fontFamily: 'Poppins-Thin',
    fontWeight: '400',
  },

});

export default Button;
