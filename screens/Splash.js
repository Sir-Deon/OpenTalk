import React from 'react';
import {StyleSheet, View, Image, StatusBar, Text} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: 200, width: 200}}
        source={require('../assets/logo.png')}
      />
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        OpenTalk
      </Text>
      <StatusBar backgroundColor="purple" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
