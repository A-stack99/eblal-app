import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ value, error, formik }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(value || new Date()); // Initialize with 'value' prop

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleDateConfirm = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    formik.setFieldValue('date', currentDate); // Set the date field value in Formik
    setDatePickerVisibility(false);
  };

  return (
    <>
      <Text style={styles.inputLabel}>Date of Birth*</Text>
      <Image source={require('../../assests/images/calendar.png')} style={styles.icon} />
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput
          style={styles.inputText}
          value={value ? value.toDateString() : ''} // Display date if available
          editable={false}
          placeholder="mm/dd/yyyy"
          placeholderTextColor={'#AFAEB7'}
        />
      </TouchableOpacity>
      {isDatePickerVisible && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateConfirm}
        />
      )}
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
  icon: {
    position: 'relative',
    backgroundColor: '#EDEDED',
    top: 35,
    left: 320,
    zIndex: 1,
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

export default DatePicker;
