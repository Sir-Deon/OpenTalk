import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Friend from '../components/Friend';
const followers = [
  {
    id: '1',
    name: 'Mike',
    nickName: '@benz',
    followed: false,
  },
  {
    id: '2',
    name: 'Boss',
    nickName: '@benz',
    followed: false,
  },
  {
    id: '3',
    name: 'Elad',
    nickName: '@benz',
    followed: false,
  },
  {
    id: '4',
    name: 'Meg',
    nickName: '@benz',
    followed: false,
  },
  {
    id: '5',
    name: 'Boti',
    nickName: '@benz',
    followed: false,
  },
  {
    id: '6',
    name: 'Boti',
    nickName: '@benz',
    followed: false,
  },
];
const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={followers}
          renderItem={({item}) => <Friend friend={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  main: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Search;
