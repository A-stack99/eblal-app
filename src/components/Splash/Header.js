import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Let's get Started!</Text>
      <Text style={styles.text}>
        Login to enjoy the features we've provided, and stay healthy!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
    top: -60,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
    top: 190,
    fontFamily: 'poppins',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#61606C',
    textAlign: 'center',
    top: 200,
    fontFamily: 'poppins',
  },
});

export default Header;
