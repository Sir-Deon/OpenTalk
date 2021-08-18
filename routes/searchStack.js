import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';
const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="TabSearch"
        component={Search}
        options={{headerShown: false}}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
