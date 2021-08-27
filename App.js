import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './routes/AuthStack';
import DrawerStackScreen from './routes/DrawerStack';
import {Provider} from 'react-redux';
import {Store} from './store/store';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  useEffect(async () => {
    //The using the browser API
    let token = await AsyncStorage.getItem('auth_token');
    if (token) {
      setUserToken(token);
    } else {
      setUserToken(null);
    }
  }, []);
  return (
    <Provider store={Store}>
      <ThemeProvider>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
