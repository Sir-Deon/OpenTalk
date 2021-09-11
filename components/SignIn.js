import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Input, LinearProgress} from 'react-native-elements';
import {AuthContext} from '../context';

const SignIn = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const {signIn} = React.useContext(AuthContext);

  const confirm = () => {
    setIsLoading(true);
    signIn(email, password);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputs}>
        <Input
          placeholder="Email"
          value={email}
          rightIcon={{
            type: 'font-awesome',
            name: true ? 'envelope' : 'check',
            color: '#aaa',
            size: 18,
          }}
          onChangeText={value => setEmail(value)}
        />
        <Input
          placeholder="Password"
          value={password}
          rightIcon={{
            type: 'font-awesome',
            name: true ? 'eye-slash' : 'eye',
            color: '#aaa',
            size: 18,
          }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.logInBtn} onPress={confirm}>
        <View>
          <Text style={styles.btnText}>Confirm</Text>
        </View>
      </TouchableOpacity>

      {isLoading ? (
        <LinearProgress style={{marginVertical: 50}} color="purple" />
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  containerText: {
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#aaa',
    marginTop: '2%',
  },
  logInBtn: {
    backgroundColor: 'purple',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputs: {
    marginTop: '20%',
  },
});

export default SignIn;
