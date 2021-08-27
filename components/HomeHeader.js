import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const HomeHeader = ({title, navigation, shift, aShift}) => {
  const menuHandler = () => {
    navigation.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={menuHandler}>
        <Image style={styles.menu} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View>
        <Text style={[styles.title, {left: shift}]}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress
        style={{
          position: 'relative',
          left: aShift,
        }}>
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
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
});

export default HomeHeader;
