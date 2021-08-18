import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const HomeHeader = ({title, navigation}) => {
  const menuHandler = () => {
    navigation.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={menuHandler}>
        <Image style={styles.menu} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
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
    left: '300%',
    fontWeight: 'bold',
    color: '#fff',
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
    position: 'relative',
    marginLeft: '69%',
  },
});

export default HomeHeader;
