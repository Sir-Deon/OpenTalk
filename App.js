import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackScreen from './routes/AuthStack';
import DrawerStackScreen from './routes/DrawerStack';
import {AuthContext} from './context';
import {Provider} from 'react-redux';
import {Store} from './store/store';
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../store/actions';

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
  const [userToken, setUserToken] = React.useState('sdjfhg');
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken('gsdfydfh');
      },
      signUp: () => {
        setUserToken('gsdfydfh');
      },
      signOut: () => {
        setUserToken(null);
      },
    };
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
