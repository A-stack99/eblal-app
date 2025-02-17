import React from 'react';
import { TextInput, Text, Image, View, StyleSheet } from 'react-native';

const InputText = ({ label, icon, secureTextEntry, placeholder, keyboardType, value, onChangeText, onBlur, error, iconStyle }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputWrapper}>
        {icon && <Image source={icon} style={[styles.inputIcon, iconStyle]} />}
        <TextInput
          style={styles.inputText}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder || `Enter your ${label}`}
          keyboardType={keyboardType}
          placeholderTextColor="#000"
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { marginBottom: 15 },
  inputLabel: { fontSize: 16, fontWeight: 'normal' },
  inputWrapper: { position: 'relative' },
  inputText: {
    borderRadius: 8,
    paddingLeft: 45,
    fontSize: 14,
    borderWidth: 0.1,
    borderColor: 'black',
    backgroundColor: '#AFAEB750',
    padding: 15,
  },
  inputIcon: { 
    position: 'absolute', 
    top: 12, 
    left: 10, 
    zIndex: 1,
    width: 20,    
    height: 20,   
  },
  errorText: { color: 'red', fontSize: 12, marginTop: 5 },
});

export default InputText;
