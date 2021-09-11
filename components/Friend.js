import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {follow} from '../src/controllers/main';
const Friend = ({friend}) => {
  const [following, setFollowing] = React.useState(false);
  const followUser = () => {
    if (!following) {
      follow(friend);
      setFollowing(true);
    }
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.close}>
        <Icon name="close" color="white" size={15} />
      </View>
      <Image
        style={{height: 80, width: 80, borderRadius: 50}}
        source={require('../assets/music.jpg')}
      />
      <Text style={{fontWeight: 'bold'}}> {friend.name} </Text>
      <Text style={{fontSize: 10, color: '#aaa'}}>
        @{friend.name.split(' ')[1]}
      </Text>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#ccc',
          marginTop: 2,
        }}></View>
      <TouchableOpacity
        style={[styles.btn, {opacity: following ? 0.5 : 1}]}
        onPress={followUser}>
        {following ? (
          <Text style={{color: '#fff'}}>
            Followed
            <Icon style={styles.icon} name="check" color="white" size={15} />
          </Text>
        ) : (
          <Text style={{color: '#fff'}}>Follow</Text>
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    minHeight: 150,
    width: 150,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#aaa',
    shadowOpacity: 0.1,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  btn: {
    backgroundColor: 'purple',
    height: 40,
    width: '80%',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  close: {
    backgroundColor: 'red',
    minHeight: 20,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 1,
    marginLeft: '80%',
  },
});

export default Friend;
