import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
const ProfileTop = ({navigation}) => {
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
      <Image style={styles.image} source={require('../assets/music.jpg')} />
      <TouchableOpacity onPress={choosePhoto} style={styles.editpic}>
        <Icon name="add" color="white" />
      </TouchableOpacity>
      <View style={styles.userInfo}>
        <View>
          <Text style={styles.name}>Angela Man</Text>
          <Text style={{color: '#aaa'}}>@man</Text>
          <Text style={{color: '#aaa'}}>dev@menubar.com</Text>
        </View>
        <TouchableOpacity
          onPress={() => [navigation.navigate('Edit Profile')]}
          style={{marginHorizontal: 70, height: 50, width: 50}}>
          <Icon name="edit" color="purple" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  editpic: {
    backgroundColor: 'purple',
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 80,
    marginLeft: -30,
  },
  userInfo: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ProfileTop;
