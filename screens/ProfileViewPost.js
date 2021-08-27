import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import Comment from '../components/Comment';

const ProfileViewPost = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.user}>
          <Image
            style={styles.profile}
            source={require('../assets/music.jpg')}
          />
          <View style={{marginLeft: 15}}>
            <Text style={{fontWeight: 'bold'}}>Angel matz</Text>
            <Text style={{color: '#bbb', fontSize: 12}}>@migs</Text>
          </View>
        </View>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
          provident. Modi eaque rerum mollitia quidem itaque aspernatur
          recusandae, praesentium reprehenderit incidunt excepturi maxime ut
          labore eius iste, maiores reiciendis illo.
        </Text>
        <Image style={styles.img} source={require('../assets/music.jpg')} />
        <Divider style={{marginTop: 10}} orientation="horizontal" width={1} />
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
          <Text style={{left: -38, color: '#bbb'}}> ~2min </Text>
        </View>
        <Divider style={{marginTop: 10}} orientation="horizontal" width={1} />
        <Comment />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    padding: 30,
  },
  user: {
    flexDirection: 'row',
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  img: {
    height: 200,
    width: '100%',
    borderRadius: 12,
    marginTop: 8,
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
    left: '-1%',
  },
  formBox: {
    height: '13%',
  },
  selectImageForm: {
    minHeight: '15%',
    paddingTop: 10,
  },
  imgSelect: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counter: {
    marginTop: 20,
    marginLeft: -40,
    color: 'purple',
  },
  talkActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  talkIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  talkBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 20,
    marginTop: -12,
  },
  emojiContainer: {
    padding: 20,
    display: 'flex',
    height: '100%',
  },

  close: {
    flexDirection: 'row',
    width: 60,
    height: 30,
  },
});

export default ProfileViewPost;
