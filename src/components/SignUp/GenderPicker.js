import React from 'react';
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GenderPicker = ({ value, onValueChange, error , onBlur }) => {
  return (
    <>
      <Text style={styles.inputLabel}>Gender*</Text>
      <Picker
        selectedValue={value}
        onValueChange={onValueChange}
        style={styles.inputPicker}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
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

export default GenderPicker;