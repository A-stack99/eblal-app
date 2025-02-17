import React from 'react';
import { TextInput, Image, Text, StyleSheet, View } from 'react-native';

const SignatureInput = ({ onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Signature</Text>
      <View style={styles.signatureText}>
      <Image source={require('../../assests/images/gallery.png')} style={styles.iconSign} />
      <Image source={require('../../assests/images/upload.png')} style={{top:30}} />
      
     </View>
      <Text style={styles.inputLabel}>Format: Png</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    color: '#61606C',
    marginBottom: 5,
  },
  iconSign: {
    position: 'absolute',
    left: 48,
    bottom: 30,
    zIndex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  signatureText: {
    borderStyle: 'dashed',
    borderWidth: 1,
    height: 80,
    width: 140,
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: '#AFAEB7',
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
  },
});

export default SignatureInput;
