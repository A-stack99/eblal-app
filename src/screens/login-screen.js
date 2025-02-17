
import React, { useContext , useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ContextAPI } from '../Global/ContextAPI';
import { useFormik } from 'formik';
import validationSchema from '../components/Login/FormValidation';
import InputText from '../components/Login/TextInput';
import Button from '../components/Login/Button';

const LogIn = ({ navigation }) => {
  const { setUser } = useContext(ContextAPI);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUser({ email: values.email, password: values.password });
      console.log(values.email, values.password);
      navigation.navigate('Profile');
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login Account</Text>
      <Text style={styles.headerText}>Please login with your registered account</Text>

      <InputText
  label="Email"
  icon={require('../assests/images/envelop.png')}
  value={formik.values.email}
  onChangeText={formik.handleChange('email')}
  onBlur={formik.handleBlur('email')}
  // iconStyle={{ width: 30, height: 30, top: 10, left: 15 }}
  error={formik.touched.email && formik.errors.email}
/>



<InputText
  label="Password"
  icon={require('../assests/images/lock.png')}
  secureTextEntry
  value={formik.values.password}
  onChangeText={formik.handleChange('password')}
  onBlur={formik.handleBlur('password')}
  // iconStyle={{ width: 20, height: 30, top: 10, left: 15 }}
  error={formik.touched.password && formik.errors.password}
/>
<TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'relative', right: -312 }}>
        <Image
          source={require('../assests/images/eye.png')} 
          style={{ width: 20, height: 20 , top:-50 }}
        />
      </TouchableOpacity>


      <TouchableOpacity>
        <Text style={styles.passwordtext}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button title="Login" onPress={formik.handleSubmit} />

      <View style={styles.signUpContainer}>
        <Text style={styles.signUp}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assests/images/or.png')} style={styles.or} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 20,
  },
  passwordtext: {
    color: '#07193D',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUp: {
    fontSize: 14,
    color: '#555',
  },
  link: {
    color: '#07193D90',
    fontWeight: 'bold',
  },
  or: {
    alignSelf: 'center',
    marginVertical: 20,
    marginTop:12
  },
});

export default LogIn;
