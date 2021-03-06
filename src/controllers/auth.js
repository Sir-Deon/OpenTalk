import {API, graphqlOperation} from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createUser} from '../mutations';
import {listUsers} from '../queries';

export const signUp = async payload => {
  // Check if user with email exists
  let user = await API.graphql(graphqlOperation(listUsers));
  let exist = false;
  await user.data.listUsers.items.map(user => {
    if (user.email === payload.email) {
      exist = true;
    }
  });
  if (exist) {
    return {
      success: false,
      msg: 'User with email already exists !!',
    };
  }
  try {
    let user = await API.graphql(
      graphqlOperation(createUser, {input: payload}),
    );
    const {id} = user.data.createUser;
    await AsyncStorage.setItem('auth_token', id);

    return {
      success: true,
      msg: 'Registration was successful !!',
    };
  } catch (err) {
    return {
      success: false,
      msg: 'Something went wrong !!',
    };
  }
};

export const signIn = async (email, password) => {
  const users = await API.graphql({query: listUsers});
  let is_user = false;
  let id = '';
  users.data.listUsers.items.map(user => {
    if (user.email === email) {
      if (user.password === password) {
        id = user.id;
        is_user = true;
      }
    }
  });
  await AsyncStorage.setItem('auth_token', id);
  return is_user;
};
