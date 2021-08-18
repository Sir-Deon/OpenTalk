import React from 'react';
import TabScreen from './Tabs';
import ProfileStackScreen from './profileStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Talk from '../screens/Talk';
import TalkHeader from '../components/TalkHeader';
import {Icon} from 'react-native-elements';

const TalkStack = createStackNavigator();

const TalkStackScreen = () => {
  return (
    <TalkStack.Navigator>
      <TalkStack.Screen
        name="TalkStackScreen"
        component={Talk}
        options={navigation => {
          return {
            headerTitle: () => (
              <TalkHeader title="Talk" navigation={navigation} />
            ),
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
    </TalkStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabScreen}
        options={{
          headerShown: false,
          drawerActiveTintColor: 'purple',
          drawerIcon: () => <Icon color="purple" name="home" />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          drawerActiveTintColor: 'purple',
          headerShown: false,
          drawerIcon: () => <Icon color="purple" name="account-circle" />,
        }}
      />
      <Drawer.Screen
        name="Talk"
        options={{
          headerShown: false,
          drawerLabel: () => null,
          drawerIcon: () => null,
        }}
        component={TalkStackScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStackScreen;
