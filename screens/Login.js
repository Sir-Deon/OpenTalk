import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SignIn from '../components/SignIn';

const Login = ({navigation}) => {
  return (
    <>
      <LinearGradient colors={['indigo', 'purple']} style={styles.top}>
        <TouchableOpacity
          style={styles.signUP}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Sing Up</Text>
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>OpenTalk</Text>
      </LinearGradient>
      <SignIn navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    height: '35%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {height: 60, width: 60, position: 'relative', top: '20%'},
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    position: 'relative',
    top: '20%',
  },
  signUP: {
    position: 'relative',
    marginLeft: '70%',

    top: -20,
  },
});

export default Login;
