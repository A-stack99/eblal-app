import React, {useState} from 'react';
import {Text, TouchableOpacity, TextInput, Image, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({value, error, formik}) => {
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
  console.log('isDatePickerVisible--', isDatePickerVisible);

  return (
    <>
      <Text style={styles.inputLabel}>Date of Birth*</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
        <Text style={{fontSize: 16, color: '#AFAEB7', marginLeft: 5}}>
          {value ? value.toDateString() : 'mm/dd/yyyy'}
        </Text>

        <Image
          source={require('../../assests/images/calendar.png')}
          style={styles.icon}
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
    resizeMode: 'contain',
    width: 20,
    height: 20,
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
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 0.1,
    borderColor: 'black',
    backgroundColor: '#AFAEB750',
    padding: 15,
  },
};

export default DatePicker;
