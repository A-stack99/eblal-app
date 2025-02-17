// GenderPicker.js
import React from 'react';
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Specialization = ({ value, onValueChange, error }) => {
  return (
    <>
      <Text style={styles.inputLabel}>Specialization*</Text>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={styles.inputPicker}
      >
        <Picker.Item label="Specialization" value="" />
        <Picker.Item label="Surgeon" value="surgeon" />
        <Picker.Item label="Dentist" value="Dentist" />
      </Picker>
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
  inputPicker: {
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#EDEDED',
    color: '#AFAEB7',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  }
};

export default Specialization;
