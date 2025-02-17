import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EditProfile from './screens/edit-profile-screen';
import LogIn from './screens/login-screen';
import MainScreen from './screens/main-screen';
import ProfilePage from './screens/profile-screen';
import OverView from './screens/proOverView-screen';
import SignUp from './screens/SignUp';

import {ContextAPIProvider} from './Global/ContextAPI';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ContextAPIProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LogIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfilePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OverView"
            component={OverView}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextAPIProvider>
  );
};

export default App;
