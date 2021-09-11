import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Input, Icon, LinearProgress} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {AuthContext} from '../context';

const Register = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {signUp} = React.useContext(AuthContext);
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [confirmPassword, setConfirmPassword] = React.useState(null);

  const register = async () => {
    setIsLoading(true);
    // Form validation
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        let user = {
          name: name,
          email: email,
          password: confirmPassword,
        };
        try {
          let result = await signUp(user);
          if (result.success) {
            alert(result.msg);
            navigation.navigate('Category');
          } else {
            alert(result.msg);
          }
        } catch (error) {
          setIsLoading(false);
          alert('Something went wrong !!');
        }
      } else {
        setIsLoading(false);
        alert('Passwords do not match !!');
      }
    } else {
      setIsLoading(false);
      alert('All fields are required !!');
    }
  };

  // Choose Image function
  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(photo => {
        setImage(photo.path);
      })
      .catch(() => {
        console.log('Rejected !!');
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        {image ? (
          <View>
            <Image style={styles.image} source={{uri: image}} />
            <TouchableOpacity style={styles.camera} onPress={choosePhoto}>
              <Icon color="purple" name="camera-alt" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={choosePhoto}>
            <View style={styles.photo}>
              <Icon name="camera-alt" />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.inputs}>
        <Input
          placeholder="Name"
          rightIcon={{
            type: 'font-awesome',
            name: 'user',
            color: '#aaa',
            size: 18,
          }}
          onChangeText={value => setName(value)}
        />
        <Input
          placeholder="Email"
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
          rightIcon={{
            type: 'font-awesome',
            name: true ? 'eye-slash' : 'eye',
            color: '#aaa',
            size: 18,
          }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <Input
          placeholder="Confirm Password"
          rightIcon={{
            type: 'font-awesome',
            name: true ? 'eye-slash' : 'eye',
            color: '#aaa',
            size: 18,
          }}
          onChangeText={value => setConfirmPassword(value)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.logIn} onPress={register}>
        <View>
          <Text style={styles.btnText}>Confirm</Text>
        </View>
      </TouchableOpacity>

      {isLoading ? (
        <LinearProgress style={{marginVertical: 40}} color="purple" />
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

  logIn: {
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
    marginTop: '2%',
  },
  photo: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderRadius: 50,
    opacity: 0.2,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  camera: {
    position: 'relative',
    marginLeft: 95,
    top: -25,
  },
});

export default Register;
