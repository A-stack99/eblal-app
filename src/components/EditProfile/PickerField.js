import React from 'react';
import { Text,  StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerField = ({ label, selectedValue, onValueChange, items }) => {
  return (
    <>
      <Text style={styles.inputLabel}>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.inputPicker}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 18,
    color: '#61606C',
    marginBottom: 5,
  },
  inputPicker: {
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    color: '#AFAEB7',
  },
});

export default PickerField;
