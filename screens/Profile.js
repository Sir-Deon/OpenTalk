import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import ProfileTop from '../components/ProfileTop';
import AnalyticsBox from '../components/AnalyticsBox';
import ProfilePosts from '../components/ProfilePosts';

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
    status: false,
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
    status: true,
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
    status: false,
    time: '35min',
    commenst: [],
  },
];
const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <ProfileTop navigation={navigation} />
      <AnalyticsBox />
      <Text style={styles.text}>Posts</Text>
      {posts.map((item, index) => (
        <ProfilePosts post={item} key={index} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 10,
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Profile;
