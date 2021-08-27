import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Hell"
        value="Angela Man"
        style={{
          borderColor: '#aaa',
          borderWidth: 1,
          width: '80%',
          borderRadius: 10,
          padding: 10,
          marginTop: 10,
        }}
        placeholderTextColor="red"
      />
      <TextInput
        value="dev@me.com"
        style={{
          borderColor: '#aaa',
          borderWidth: 1,
          width: '80%',
          borderRadius: 10,
          padding: 10,
          marginTop: 15,
        }}
        placeholderTextColor="red"
      />

      <TextInput
        placeholder="Password"
        style={{
          borderColor: '#aaa',
          borderWidth: 1,
          width: '80%',
          borderRadius: 10,
          padding: 10,
          marginTop: 15,
        }}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Confirm Password"
        style={{
          borderColor: '#aaa',
          borderWidth: 1,
          width: '80%',
          borderRadius: 10,
          padding: 10,
          marginTop: 20,
        }}
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.confirm}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm</Text>
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
  confirm: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#ccc',
    marginTop: 20,
    borderRadius: 30,
  },
});

export default EditProfile;
