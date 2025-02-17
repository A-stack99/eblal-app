
import React from 'react';
import { Text, TextInput } from 'react-native';

const InputText = ({ label, value, onChangeText, onBlur, placeholder, keyboardType, error }) => {
  return (
    <>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={'#AFAEB7'}
        // value={value}
        onChangeText={onChangeText}
        // onBlur={onBlur}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

const styles = {
  inputLabel: {
    fontSize: 18,
    color: '#61606C',
    marginBottom: 5,
  },
  inputText: {
    borderWidth: 0.5,
    borderColor: '#AFAEB7',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#EDEDED',
    color: '#AFAEB7',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  }
};

export default InputText;
