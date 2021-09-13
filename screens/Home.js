import React from 'react';
import {StyleSheet, View, Text, FlatList, StatusBar} from 'react-native';
import Post from '../components/Post';
import ActionButton from 'react-native-action-button';
import {posts} from '../state';

const Home = ({navigation}) => {
  const createPosthandler = () => {
    navigation.navigate('Create Post');
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index}
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
