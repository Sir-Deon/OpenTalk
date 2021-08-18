import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
const Comment = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={require('../assets/music.jpg')} />
      <View style={styles.post}>
        <View style={styles.details}>
          <Text style={{fontWeight: 'bold'}}> Mark Antony </Text>
          <Text style={styles.alias}> @mig </Text>
          <Text style={{marginLeft: '30%', color: '#bbb'}}> ~2min </Text>
        </View>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          nesciunt, maxime sequi quaerat aliquid ducimus cum animi. Magnam minus
          ea fuga illo possimus non! Dolor voluptas asperiores in velit
          voluptates.
        </Text>
        <Image style={styles.img} source={require('../assets/music.jpg')} />

        <View style={styles.actions}>
          <View style={styles.comments}>
            <TouchableOpacity>
              <Icon name="chat-bubble-outline" color="#bbb" />
            </TouchableOpacity>
            <Text style={{marginLeft: 10, color: '#bbb'}}>2</Text>
          </View>
          <View style={styles.likes}>
            <TouchableOpacity>
              <Icon name="thumb-up-off-alt" color="#bbb" />
            </TouchableOpacity>
            <Text style={{marginLeft: 10, color: '#bbb'}}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
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
    width: '90%',
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
  },
  comments: {
    flexDirection: 'row',
    left: '30%',
  },
  likes: {
    flexDirection: 'row',
  },
});

export default Comment;
