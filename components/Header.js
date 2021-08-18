import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = ({navigation}) => {
  const menuHandler = () => {
    navigation.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={menuHandler}>
        <Image style={styles.menu} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View style={styles.search}>
        <TextInput
          style={{color: '#000', marginLeft: '5%'}}
          placeholder="Search.."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity>
          <Icon
            style={{marginTop: 10, marginLeft: '70%'}}
            color="purple"
            name="search"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.avatar}>
        <Image style={styles.image} source={require('../assets/music.jpg')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    marginLeft: -20,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  menu: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginLeft: 10,
  },

  title: {
    position: 'relative',
    left: '210%',
    fontWeight: 'bold',
    color: '#fff',
  },

  avatar: {
    position: 'relative',
    marginLeft: '5%',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  search: {
    width: '70%',
    height: 45,
    backgroundColor: '#fff',
    marginLeft: 20,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Header;
