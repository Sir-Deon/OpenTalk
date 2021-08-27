import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = ({navigation}) => {
  const route = dest => {
    navigation.navigate(dest);
  };
  return (
    <>
      <LinearGradient colors={['indigo', 'purple']} style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>OpenTalk </Text>
        <Text style={styles.text}>
          Follow your best friends and exchange great message about your
          activity and experience.
        </Text>
        <TouchableOpacity
          style={styles.logIn}
          onPress={() => {
            route('Login');
          }}>
          <View>
            <Text
              style={{
                color: 'indigo',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Log In
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUp}
          onPress={() => {
            route('SignUp');
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Create Account
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            color: '#bf4aef',
            fontWeight: 'bold',
            position: 'relative',
            top: '15%',
          }}>
          Hosted By Kola
        </Text>
        <StatusBar backgroundColor="indigo" />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {height: 100, width: 100, position: 'relative', top: '20%'},
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'poppins',
    position: 'relative',
    top: '20%',
  },
  text: {
    position: 'relative',
    color: '#bf4aef',
    textAlign: 'center',
    top: '20%',
    padding: 20,
  },
  logIn: {
    backgroundColor: '#fff',
    height: 40,
    width: '80%',
    marginTop: '40%',
    justifyContent: 'center',
    borderRadius: 20,
  },

  signUp: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'purple',
    height: 40,
    width: '80%',
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default Welcome;
