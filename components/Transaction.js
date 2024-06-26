// PopularJobCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Transaction = ({ image, title, type, amount, isDarkMode, invertImage }) => {
  return (
    <View style={[styles.transactionCard, isDarkMode && invertImage]}>
      <View style={[styles.imageBgc, { backgroundColor: isDarkMode ? 'rgba(22,22,34,0.5)' : '#EEEEEE' }]}>
      <Image source={image} style={[styles.image, invertImage && { tintColor: isDarkMode ? '#ffffff' : '#000000' }]} />
      </View>  
      <View style={styles.transactionDetails}>
        <View style={styles.titleAndPurpose}>
          <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{title}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <View style={styles.amountDetails}>
          <Text style={[styles.amount, { color: isDarkMode ? '#ffffff' : '#000000' }]}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 1,
  },

  imageBgc: {
    backgroundColor: '#EEEEEE',
    width: 50,
    height:50,
    borderRadius: 30,
    justifyContent:'center',
    alignItems: 'center',
  },

  image:{
   width: 20,
   height: 20, 
   resizeMode: 'contain',  
  },

  transactionDetails: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 20,
  },
  titleAndPurpose: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  amountDetails: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  type: {
    fontSize: 14,
    color: '#718096',
    fontFamily: 'Poppins-Regular',
  },

  amountDetails:{
    alignSelf: 'center'
  },

  amount: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  jobLocation: {
    fontSize: 12,
    color: '#A0AEC0',
    fontFamily: 'Poppins-Regular',
  },
});

export default Transaction;
