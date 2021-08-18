import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {Icon} from 'react-native-elements';

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHead}>
        <Image style={styles.profile} source={require('../assets/music.jpg')} />
        <View style={{marginHorizontal: 10}}>
          <Text style={{fontWeight: 'bold'}}>Angela Man</Text>
          <Text style={{color: '#bbb'}}>@migo</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <TextInput
          style={styles.textArea}
          placeholder="Write your Post"
          placeholderTextColor="#aaa"
          color="#000"
        />
      </View>
      <View style={styles.action}>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="emoji-emotions" color="purple" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 20}}>
            <Icon name="camera-alt" color="purple" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.postBtn}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                marginHorizontal: 10,
              }}>
              Post
            </Text>
            <Icon name="send" color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileHead: {
    flexDirection: 'row',
  },
  textBox: {
    width: '100%',
    height: '40%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  textArea: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  action: {
    flexDirection: 'row',
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  postBtn: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default CreatePost;
