import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Sign Out</Text>
      </TouchableOpacity>
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

export default Profile;
