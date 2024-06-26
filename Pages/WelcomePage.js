import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Button from '../components/Button';
import Transaction from '../components/Transaction';

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Thin': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Italic.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
  });
};

const WelcomePage = ({ navigation, isDarkMode }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const handleLogin = () => {
    navigation.navigate('Settings');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
        <View style={styles.page}>
          <View style={styles.welcomeBanner}>
            <View style={styles.profilePicture}>
              <Image style={styles.picture} source={require('../assets/pictures/profile.png')} />
            </View>
            <View style={styles.welcomeMessage}>
              <Text style={[styles.textStyle1, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Welcome back,</Text>
              <Text style={[styles.nameText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Eric Atsu</Text>
            </View>
            <TouchableOpacity style={[styles.searchButton , { backgroundColor: isDarkMode ? 'rgba(22,22,34,0.5)' : '#EEEEEE' }]}>
              <Image style={[styles.search, isDarkMode && styles.invertedImage]} source={require('../assets/pictures/search.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.cardArea}>
            <Image style={styles.card} source={require('../assets/pictures/Card.png')} />
          </View>

          <View style={styles.buttonsView}>
            <Button
              image={require('../assets/pictures/send.png')}
              buttonName='Sent'
              isEnabled={isDarkMode}
              imgWidth={20}
              imgHeight={25}
            />
            <Button
              image={require('../assets/pictures/recieve.png')}
              buttonName='Receive'
              isEnabled={isDarkMode}
              imgWidth={20}
              imgHeight={25}
            />
            <Button
              image={require('../assets/pictures/loan.png')}
              buttonName='Loan'
              isEnabled={isDarkMode}
              imgWidth={30}
              imgHeight={30}
            />
            <Button
              image={require('../assets/pictures/topUp.png')}
              buttonName='Topup'
              isEnabled={isDarkMode}
              imgWidth={25}
              imgHeight={26}
            />
          </View>

          <View style={styles.transHeading}>
            <Text style={[styles.nameText, { color: isDarkMode ? '#ffffff' : '#000000' }]}>Transaction</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={[styles.nameText, styles.seeAllText]}>See all</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Transaction 
              image={require('../assets/pictures/apple.png')}
              title="Apple Store"
              type="Entertainment"
              amount="- $5,99"
              isDarkMode={isDarkMode}
              invertImage={true}
            />
            <Transaction
              image={require('../assets/pictures/spotify.png')}
              title="Spotify"
              type="Music"
              amount="- $12,99"
              isDarkMode={isDarkMode}
            />
            <Transaction
              image={require('../assets/pictures/moneyTransfer.png')}
              title="Money Transfer"
              type="Transaction"
              amount="$300"
              isDarkMode={isDarkMode}
              invertImage={true}
            />
            <Transaction
              image={require('../assets/pictures/grocery.png')}
              title="Grocery"
              type="Transaction"
              amount="- $ 88"
              isDarkMode={isDarkMode}
            />
          </View>
        </View>
    </SafeAreaView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },

  darkContainer: {
    backgroundColor: '#00010a',
  },

  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    
  },

  page: {
    marginTop: 20,
    marginRight: 25,
    marginLeft: 25,
  },

  welcomeBanner: {
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  picture: {
    width: 60,
    height: 60,
  },

  welcomeMessage: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },

  textStyle1: {
    fontFamily: 'Poppins-Thin',
    color: '#afafaf',
    fontSize: 14,
    fontWeight: '400',
  },

  nameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#000000',
  },

  searchButton: {
    backgroundColor: '#EEEEEE',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 130,
  },

  search: {
    width: 25,
    height: 25,
  },

  invertedImage: {
    tintColor: '#ffffff', 
  },


  card: {
    width: 370,
    height: 210,
    borderRadius: 30,
  },

  cardArea: {
    paddingTop: 15,
    paddingBottom: 20,
    marginBottom: 15,
  },

  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  transHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 20,
    marginBottom: 20,
  },


  seeAllText: {
    color: '#1b7ced',
    fontSize: 14,
  },
});

export default WelcomePage;
