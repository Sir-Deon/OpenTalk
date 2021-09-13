import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {Icon, LinearProgress} from 'react-native-elements';
import EmojiSelector from 'react-native-emoji-selector';
import ImagePicker from 'react-native-image-crop-picker';
import {update} from '../state';
const CreatePost = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const [image, setImage] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const createPost = async () => {
    setIsLoading(true);
    if (message) {
      update(message);
      setIsLoading(false);
    }
  };
  // Choose Image function
  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(photo => {
        setImage(photo.path);
      })
      .catch(() => {
        console.log('Rejected !!');
      });
  };
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
          onChangeText={value => setMessage(value)}
          multiline={true}
          placeholderTextColor="#aaa"
          color="#000"
        />
        {image ? (
          <TouchableOpacity
            style={{width: '50%'}}
            onPress={() => setImage(null)}>
            <Image style={styles.imgSelect} source={{uri: image}} />
          </TouchableOpacity>
        ) : (
          <Text style={{display: 'none'}}>''</Text>
        )}
      </View>
      <View style={styles.action}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => [setModalVisible(true)]}>
            <Icon name="emoji-emotions" color="purple" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={choosePhoto}
            style={{marginHorizontal: 20}}>
            <Icon name="camera-alt" color="purple" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={createPost}>
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
      {isLoading ? (
        <LinearProgress style={{marginVertical: 40}} color="purple" />
      ) : (
        <Text></Text>
      )}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.emojiContainer}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => setModalVisible(false)}>
            <Icon name="chevron-left" color="purple" />
            <Text
              style={{fontWeight: 'bold', color: 'purple', marginVertical: 2}}>
              Close
            </Text>
          </TouchableOpacity>
          <EmojiSelector
            theme="purple"
            placeholder="Search..."
            placeholderTextColor="#aaa"
            showHistory={true}
            onEmojiSelected={emoji => setMessage(message + emoji)}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  imgSelect: {
    height: 100,
    width: 100,
    marginTop: 100,
    borderRadius: 10,
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
    minHeight: '40%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10,
  },
  textArea: {
    width: '100%',
    maxHeight: 310,
    justifyContent: 'flex-start',
  },
  action: {
    marginTop: 10,
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
  emojiContainer: {
    backgroundColor: 'white',
    padding: 20,
    display: 'flex',
    height: '100%',
    marginTop: '80%',
  },

  close: {
    flexDirection: 'row',
    width: 60,
    height: 30,
  },
});

export default CreatePost;
