import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';

import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={Home}
        options={navigation => {
          return {
            tabBarButton: props => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: 'purple'},
            tabBarIcon: () => <Icon color="#fff" name="home" />,
            headerTitle: () => (
              <HomeHeader
                shift="300%"
                aShift="430%"
                navigation={navigation}
                title="Home"
              />
            ),
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
      <HomeStack.Screen
        options={{
          headerTintColor: '#aaa',
          headerTitleStyle: {
            color: '#aaa',
          },
        }}
        name="Create Post"
        component={CreatePost}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
