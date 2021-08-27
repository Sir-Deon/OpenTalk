import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';

const ProfilePost = ({post, navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const viewPost = () => {
    navigation.navigate('View Post');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={post.profile} />
      <View style={styles.post}>
        <View style={styles.details}>
          <Text style={{fontWeight: 'bold'}}> {post.name} </Text>
          <Text style={styles.alias}> {post.alias} </Text>
          <View style={{flexDirection: 'row', marginLeft: 140}}>
            <TouchableOpacity
              onPress={() => [setModalVisible(true)]}
              style={{height: 40, width: 40}}>
              <Icon name="delete" color="purple" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={viewPost}>
          <Text style={styles.text}>{post.text.substring(0, 120)}...</Text>
          <Image style={styles.img} source={post.image} />
        </TouchableOpacity>
        <View style={styles.actions}>
          <View
            style={[
              post.status
                ? {backgroundColor: 'purple'}
                : {backgroundColor: '#aaa'},
              {padding: 10, borderRadius: 20, marginLeft: -15},
            ]}>
            <Text style={{color: 'white', fontSize: 10}}>
              {' '}
              {post.status ? 'Private' : 'Public'}{' '}
            </Text>
          </View>
          <View style={styles.comments}>
            <TouchableOpacity>
              <Icon name="chat-bubble-outline" color="#bbb" />
            </TouchableOpacity>
            <Text style={{marginLeft: 5, color: '#bbb'}}>
              {post.commentNum}
            </Text>
          </View>
          <View style={styles.likes}>
            <TouchableOpacity>
              <Icon name="thumb-up-off-alt" color="#bbb" />
            </TouchableOpacity>
            <Text style={{marginLeft: 10, color: '#bbb'}}>{post.likes}</Text>
          </View>
          <Text style={{marginLeft: -20, color: '#bbb'}}> ~{post.time} </Text>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.popUp}>
          <TouchableOpacity style={styles.delete}>
            <Text style={{color: 'white', fontWeight: '900'}}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => [setModalVisible(false)]}
            style={styles.cancel}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    left: '1%',
  },
  likes: {
    flexDirection: 'row',
    left: '2%',
  },
  popUp: {
    height: '50%',
    backgroundColor: 'white',
    marginTop: '140%',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
  },

  delete: {
    backgroundColor: 'orange',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },

  cancel: {
    marginVertical: 20,
    backgroundColor: '#ccc',
    height: 50,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default ProfilePost;
