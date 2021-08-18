import React from 'react';
import Header from '../components/Header';
import HomeHeader from '../components/HomeHeader';
import {TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './homeStack';
import SearchStackScreen from './searchStack';
import Notification from '../screens/Notification';
import Messaging from '../screens/Messaging';
import {Icon} from 'react-native-elements';
const Tabs = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home Tab"
        component={HomeStackScreen}
        options={{headerShown: false}}
        options={() => {
          return {
            tabBarButton: props => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: 'purple'},
            tabBarIcon: () => <Icon color="#fff" name="home" />,
            headerShown: false,
          };
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchStackScreen}
        options={navigation => {
          return {
            tabBarButton: props => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarVisibilityAnimationConfig: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: 'purple'},
            tabBarIcon: () => <Icon color="#fff" name="search" />,
            headerTitle: () => <Header navigation={navigation} />,
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={navigation => {
          return {
            tabBarButton: props => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: 'purple'},
            tabBarIcon: () => <Icon color="#fff" name="notifications" />,
            headerTitle: () => (
              <HomeHeader
                title="Notification"
                shift="150%"
                aShift="360%"
                navigation={navigation}
              />
            ),
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
      <Tabs.Screen
        name="Messaging"
        component={Messaging}
        options={navigation => {
          return {
            tabBarButton: props => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'white',
            tabBarStyle: {backgroundColor: 'purple'},
            tabBarIcon: () => <Icon color="#fff" name="mail" />,
            headerTitle: () => (
              <HomeHeader
                title="Message"
                shift="200%"
                aShift="388%"
                navigation={navigation}
              />
            ),
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabScreen;
