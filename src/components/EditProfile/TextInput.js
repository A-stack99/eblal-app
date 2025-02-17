import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder, keyboardType }) => {
  return (
    <>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#AFAEB7"
        keyboardType={keyboardType}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 18,
    color: '#61606C',
    marginBottom: 5,
  },
  inputText: {
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    color: '#AFAEB7',
    height: 55,
  },
});

export default InputField;
