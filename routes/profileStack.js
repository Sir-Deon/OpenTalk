import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import ProfileViewPost from '../screens/ProfileViewPost';
import ProfileHeader from '../components/ProfileHeader';
import EditProfile from '../screens/EditProfle';
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
      <ProfileStack.Screen
        name="View Post"
        component={ProfileViewPost}
        options={() => {
          return {
            headerTintColor: 'white',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
      <ProfileStack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={() => {
          return {
            headerTintColor: 'white',
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {backgroundColor: 'purple', height: 60},
          };
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
