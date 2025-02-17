import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {useContext} from 'react';
import {ContextAPI} from '../Global/ContextAPI';
import Header from '../components/Splash/Header';
import Button from '../components/Splash/Button';

const MainScreen = ({navigation}) => {
  const user = useContext(ContextAPI);

  return (
    <ImageBackground
      source={require('../assests/images/doctor.png')}
      style={styles.container}>
      <Image
        source={require('../assests/images/health2.png')}
        style={styles.image}
      />
      {user && (
        <View>
          <Header />
          <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
            style={styles.loginButton}
            textStyle={{color: '#ffffff'}}
          />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('SignUp')}
            style={styles.signupButton}
            textStyle={{color: '#3C3B43'}}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    padding:10
  },
  image: {
    width: '230',
    height: '118.24',
    justifyContent: 'center',
    // alignItems: 'center',
    blend: 'darken',
    top: 38,
    left: 2,
    resizeMode:'contain'
  },
  loginButton: {
    backgroundColor: '#07193D',
    top:175,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    left:2,
  },
  signupButton: {
    backgroundColor: '#07193D20',
    top:185,
     alignItems:'center',
     justifyContent:'center',
    alignSelf:'center',
    left:2,
  },
});
