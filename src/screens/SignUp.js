


import React from 'react';
import SignUpForm from '../components/SignUp/Form';

 const SignUp = ({ navigation }) => {
    const handleFormSubmit = (formValues) => {
      console.log('Form Submitted:', formValues);
  
     
      Alert.alert('Success', 'Your account has been created!', [
        { text: 'OK', onPress: () => navigation.navigate('Profile') },
      ]);
    };

  return <SignUpForm onSubmit={handleFormSubmit} navigation={navigation} />;
};

export default SignUp;