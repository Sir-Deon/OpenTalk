import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import ProfileHeader from '../components/ProfileHeader';
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileStack"
        component={Profile}
        options={navigation => {
          return {
            headerTitle: () => (
              <ProfileHeader navigation={navigation} title="Profile" />
            ),
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
