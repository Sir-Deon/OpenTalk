import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import ChooseCategory from '../components/ChooseCategory';
const Category = ({navigation}) => {
  const route = () => {
    navigation.push('Follow');
  };
  return (
    <>
      <LinearGradient colors={['indigo', 'purple']} style={styles.top}>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step</Text>
          <View style={styles.stepper}></View>
          <View style={styles.mainStepper}></View>
          <View style={styles.stepper}></View>
        </View>
        <TouchableOpacity style={styles.skip} onPress={route}>
          <Text style={styles.skipText}>Skip</Text>
          <Icon style={{marginLeft: 2}} color="#fff" name="chevron-right" />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>OpenTalk</Text>
      </LinearGradient>
      <ChooseCategory navigation={navigation} />
      <StatusBar backgroundColor="indigo" />
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    height: '25%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  logo: {height: 60, width: 60, position: 'relative', top: '10%'},
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    position: 'relative',
    top: '10%',
  },
  skip: {
    width: 40,
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginLeft: '70%',
    fontWeight: 'bold',
    top: -20,
  },
  skipText: {
    color: '#fff',
  },
  step: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    left: '-70%',
  },
  stepText: {
    color: '#fff',
    marginLeft: 4,
  },
  stepper: {
    backgroundColor: 'transparent',
    height: 10,
    width: 10,
    borderRadius: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 8,
  },
  mainStepper: {
    backgroundColor: '#fff',
    height: 10,
    width: 18,
    borderRadius: 10,
    marginTop: 8,
    marginTop: 8,
    marginLeft: 4,
  },
});

export default Category;
