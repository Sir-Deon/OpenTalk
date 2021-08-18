import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Category from '../screens/Category';
import Follow from '../screens/Follow';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />

      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />

      <AuthStack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />
      <AuthStack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Follow"
        component={Follow}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
