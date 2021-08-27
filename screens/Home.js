import React from 'react';
import {StyleSheet, View, Text, FlatList, StatusBar} from 'react-native';
import Post from '../components/Post';
import ActionButton from 'react-native-action-button';

const posts = [
  {
    id: '1',
    name: 'Angela Man',
    alias: '@migo',
    profile: require('../assets/music.jpg'),
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis deserunt inventore officia temporibus illum facere, voluptatibus beatae, dolorem, quidem dolor corrupti nobis ea architecto esse porro fugit culpa sint.',
    likes: 0,
    commentNum: 2,
    image: require('../assets/music.jpg'),
    time: '35min',
    commenst: [],
  },
  {
    id: '2',
    name: 'Angela Man',
    alias: '@migo',
    profile: require('../assets/music.jpg'),
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis deserunt inventore officia temporibus illum facere, voluptatibus beatae, dolorem, quidem dolor corrupti nobis ea architecto esse porro fugit culpa sint.',
    likes: 0,
    commentNum: 2,
    image: require('../assets/music.jpg'),
    time: '35min',
    commenst: [],
  },
  {
    id: '3',
    name: 'Angela Man',
    alias: '@migo',
    profile: require('../assets/music.jpg'),
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis deserunt inventore officia temporibus illum facere, voluptatibus beatae, dolorem, quidem dolor corrupti nobis ea architecto esse porro fugit culpa sint.',
    likes: 0,
    commentNum: 2,
    image: require('../assets/music.jpg'),
    time: '35min',
    commenst: [],
  },
];
const Home = ({navigation}) => {
  const createPosthandler = () => {
    navigation.navigate('Create Post');
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={posts}
        renderItem={({item}) => <Post post={item} navigation={navigation} />}
      />
      <ActionButton
        onPress={createPosthandler}
        buttonColor="purple"></ActionButton>
      <StatusBar backgroundColor="purple" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 5,
  },
});

export default Home;
