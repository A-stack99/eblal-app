import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

const BioInput = ({ label, value, onChangeText, placeholder }) => {
  return (
    <>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.bioText}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#AFAEB7"
        multiline
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
  bioText: {
    borderWidth: 0.3,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 60,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#ffffff',
    color: '#AFAEB7',
    padding: 20,
  },
});

export default BioInput;
