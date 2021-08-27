import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import {Divider} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import Comment from '../components/Comment';
import EmojiSelector from 'react-native-emoji-selector';
import ImagePicker from 'react-native-image-crop-picker';

const Talk = props => {
  const [image, setImage] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
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
      <ScrollView>
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
      </ScrollView>
      <View style={[image ? styles.selectImageForm : styles.formBox]}>
        {image ? (
          <TouchableOpacity onPress={() => setImage(null)}>
            <Image style={styles.imgSelect} source={{uri: image}} />
          </TouchableOpacity>
        ) : (
          <Text style={{display: 'none'}}>''</Text>
        )}
        <View style={styles.input}>
          <TextInput
            placeholder="Your comment"
            color="#000"
            multiline={true}
            style={{width: '100%', maxHeight: 50}}
            placeholderTextColor="purple"
            onChangeText={value => {
              setMessage(value);
            }}
            value={message}
          />
          <Text style={styles.counter}> {message.length}/100</Text>
        </View>
        <View style={styles.talkActions}>
          <View style={styles.talkIcons}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="emoji-emotions" color="purple" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: 10}}
              onPress={choosePhoto}>
              <Icon name="camera-alt" color="purple" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setImage(null)}>
            <View style={styles.talkBtn}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Talk
              </Text>
              <Icon name="send" color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
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

export default Talk;
