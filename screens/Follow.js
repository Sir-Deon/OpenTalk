import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Friend from '../components/Friend';
import {AuthContext} from '../context';
import {getUsers} from '../src/controllers/main';
const Follow = () => {
  const [users, setUsers] = React.useState([]);
  const {gotoApp} = React.useContext(AuthContext);
  React.useEffect(async () => {
    let data = await getUsers();
    setUsers(data);
  }, []);
  return (
    <>
      <LinearGradient colors={['indigo', 'purple']} style={styles.top}>
        <View style={styles.step}>
          <Text style={styles.stepText}>Step</Text>
          <View style={styles.stepper}></View>
          <View style={styles.stepper}></View>
          <View style={styles.mainStepper}></View>
        </View>
        <TouchableOpacity style={styles.skip}>
          <Text style={styles.skipText}>Skip</Text>
          <Icon style={{marginLeft: 2}} color="#fff" name="chevron-right" />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>OpenTalk</Text>
      </LinearGradient>
      <View style={styles.container}>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 22}}>
          Follow your friends
        </Text>

        <ScrollView>
          <View style={[styles.main, {height: users.length + 1000}]}>
            {users.map((item, index) => {
              return <Friend key={index} friend={item} />;
            })}
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.next} onPress={gotoApp}>
          <View style={styles.text}>
            <Text style={styles.nextText}>Next Step</Text>
            <Icon name="chevron-right" color="white" />
          </View>
        </TouchableOpacity>
      </View>
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
  next: {
    position: 'absolute',
    backgroundColor: 'purple',
    height: 1,
    borderRadius: 40,
    justifyContent: 'center',
    width: '90%',
    marginTop: '120%',
  },
  nextText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
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

  container: {
    alignItems: 'center',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Follow;
