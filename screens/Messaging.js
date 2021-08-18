import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Messaging = () => {
  return (
    <View style={styles.container}>
      <Text>Messaging Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Messaging;
