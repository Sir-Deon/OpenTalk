import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const Notification = () => {
  return (
    <View style={styles.container}>
      <Text>Notificaton Screen</Text>
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

export default Notification;
