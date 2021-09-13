import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './routes/AuthStack';
import DrawerStackScreen from './routes/DrawerStack';
import Splash from './screens/Splash';
import {AuthContext} from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signIn, signUp} from './src/controllers/auth';
import {post} from './src/controllers/main';
// Creating root stack Navigators
const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => {
  return (
    <RootStack.Navigator>
      {userToken ? (
        <RootStack.Screen
          options={{headerShown: false}}
          name="App"
          component={DrawerStackScreen}
        />
      ) : (
        <RootStack.Screen
          options={{headerShown: false}}
          name="Auth"
          component={AuthStackScreen}
        />
      )}
    </RootStack.Navigator>
  );
};

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authContext = React.useMemo(() => {
    return {
      signIn: async (email, password) => {
        setIsLoading(false);
        const state = await signIn(email, password);
        if (state) {
          let token = await AsyncStorage.getItem('auth_token');
          setUserToken(token);
        } else {
          alert('User does not exist !!');
        }
      },
      signUp: async user => {
        setIsLoading(false);
        let result = await signUp(user);
        return result;
      },
      signOut: async () => {
        await AsyncStorage.removeItem('auth_token');
        setIsLoading(false);
        setUserToken(null);
      },
      gotoApp: async () => {
        let token = await AsyncStorage.getItem('auth_token');
        setUserToken(token);
      },
      makePost: async arg => {
        let result = await post(arg);
        return result;
      },
    };
  }, []);

  useEffect(async () => {
    let token = await AsyncStorage.getItem('auth_token');
    if (token) {
      setUserToken(token);
      setIsLoading(false);
    } else {
      setUserToken(null);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export default App;
