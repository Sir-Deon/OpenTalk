import {API, graphqlOperation} from 'aws-amplify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createFollowing, createPost} from '../mutations';
import {listUsers} from '../queries';
import Post from '../../components/Post';

export const post = async data => {
  try {
    graphqlOperation(createPost, {input: data});
    return true;
  } catch (error) {
    return false;
  }
};
export const getUsers = async () => {
  let others = [];
  let authUser = await AsyncStorage.getItem('auth_token');
  const users = await API.graphql({query: listUsers});

  users.data.listUsers.items.map(user => {
    if (user.id != authUser) {
      others.push(user);
    }
  });
  return others;
};
