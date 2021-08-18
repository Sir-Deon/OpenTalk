import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
const TalkHeader = ({title, navigation}) => {
  const back = () => {
    navigation.navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={back}>
        <Icon name="arrow-back" color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Talk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flex: 1,
    marginVertical: 20,
  },

  title: {
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 20,
  },
});

export default TalkHeader;
