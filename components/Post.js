import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Post = ({post, navigation}) => {
  const talkHandler = () => {
    navigation.navigate('Talk');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={post.profile} />
      <View style={styles.post}>
        <View style={styles.details}>
          <Text style={{fontWeight: 'bold'}}> {post.name} </Text>
          <Text style={styles.alias}> {post.alias} </Text>
        </View>
        <TouchableOpacity onPress={talkHandler}>
          <Text style={styles.text}>{post.text.substring(0, 120)}...</Text>
          <Image style={styles.img} source={post.image} />
        </TouchableOpacity>
        <View style={styles.actions}>
          <View style={styles.comments}>
            <TouchableOpacity>
              <Icon name="chat-bubble-outline" color="#bbb" />
            </TouchableOpacity>
            <Text style={{marginLeft: 10, color: '#bbb'}}>
              {post.commentNum}
            </Text>
          </View>
          <View style={styles.likes}>
            <TouchableOpacity>
              <Icon name="thumb-up-off-alt" color="#bbb" />
            </TouchableOpacity>
            <Text style={{marginLeft: 10, color: '#bbb'}}>{post.likes}</Text>
          </View>
          <Text style={{marginLeft: 20, color: '#bbb'}}> ~{post.time} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 50,
    paddingBottom: 0,
    paddingTop: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  details: {
    flexDirection: 'row',
  },
  text: {
    padding: 5,
    color: 'black',
  },
  img: {
    height: 160,
    width: '100%',
    borderRadius: 12,
  },
  post: {
    padding: 10,
  },
  alias: {
    color: '#bbb',
    fontSize: 12,
    marginLeft: 1,
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    left: '10%',
  },
  comments: {
    flexDirection: 'row',
    left: '15%',
  },
  likes: {
    flexDirection: 'row',
    left: '10%',
  },
});

export default Post;
