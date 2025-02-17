import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import * as Yup from 'yup';
import Button from '../SignUp/Button';
import DatePicker from '../SignUp/DatePicker';
import GenderPicker from '../SignUp/GenderPicker';
import InputText from '../SignUp/InputText';
import LinkText from '../SignUp/LinkText';
import ImagePicker from './ImagePicker';
import Specialization from './Specialization';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  nationalId: Yup.string().matches(/^\d{10}$/, 'National ID must be 10 digits').required('National ID is required'),
  phoneNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  date: Yup.date().nullable().required('Date of Birth is required'),
  specialization: Yup.string().required('Specialization is required'),
  licenseNo: Yup.string().required('License No is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignUpForm = ({ onSubmit, navigation }) => {
  const [date, setDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

 
  const formik = useFormik({
    initialValues: {
      name: '',
      nationalId: '',
      phoneNumber: '',
      email: '',
      gender: '',
      date: null,
      specialization: '',
      licenseNo: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
      navigation.navigate('Login');
    },
  });



  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.header}>Create Account</Text>
      <Text style={styles.subHeader}>Create account as doctor</Text>

      <ImagePicker />

      <InputText
        label="Doctor Name*"
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        error={formik.touched.name && formik.errors.name}
      />

   
      <InputText
        label="National ID*"
        keyboardType="numeric"
        value={formik.values.nationalId}
        onChangeText={formik.handleChange('nationalId')}
        onBlur={formik.handleBlur('nationalId')}
        error={formik.touched.nationalId && formik.errors.nationalId}
      />

      <InputText
        label="Phone Number*"
        keyboardType="phone-pad"
        value={formik.values.phoneNumber}
        onChangeText={formik.handleChange('phoneNumber')}
        onBlur={formik.handleBlur('phoneNumber')}
        error={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />

 
      <InputText
        label="E-mail*"
        keyboardType="email-address"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        error={formik.touched.email && formik.errors.email}
      />


      <GenderPicker
        name="gender"
        value={formik.values.gender}
        onValueChange={formik.handleChange('gender')}
        onBlur={formik.handleBlur('gender')}
        error={formik.touched.gender && formik.errors.gender}
      />


<DatePicker
  value={formik.values.date} 
  error={formik.touched.date && formik.errors.date} 
  formik={formik}
/>


      <Specialization
        name="specialization"
        value={formik.values.specialization}
        onValueChange={formik.handleChange('specialization')}
        onBlur={formik.handleBlur('specialization')}
        error={formik.touched.specialization && formik.errors.specialization}
      />

    
      <InputText
        label="License No*"
        keyboardType="phone-pad"
        value={formik.values.licenseNo}
        onChangeText={formik.handleChange('licenseNo')}
        onBlur={formik.handleBlur('licenseNo')}
        error={formik.touched.licenseNo && formik.errors.licenseNo}
      />

  
      <InputText
        label="Password*"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        error={formik.touched.password && formik.errors.password}
      />


  {/* <Button title="LogIn" onPress={formik.handleSubmit} /> */}
  <Button onPress={formik.handleSubmit} />
   
      <LinkText
        text="Already have an account? "
        linkText="Sign In"
        onLinkPress={() => navigation.navigate('Login')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', color: '#3C3B43',  },
  subHeader: { fontSize: 15, color: '#D7D6DB',  },
});

export default SignUpForm;
