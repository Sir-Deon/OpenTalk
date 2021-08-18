import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Category from './Category';

// Categories
const categories = [
  {
    name: 'Drinks',
    image: require('../assets/drinks.jpeg'),
    chosed: false,
  },
  {
    name: 'Politics',
    image: require('../assets/politics.png'),
    chosed: false,
  },
  {
    name: 'Music',
    image: require('../assets/music.jpg'),
    chosed: false,
  },
  {
    name: 'Stocks',
    image: require('../assets/stocks.jpeg'),
    chosed: false,
  },
  {
    name: 'Technology',
    image: require('../assets/tech.jpg'),
    chosed: false,
  },
  {
    name: 'Sports',
    image: require('../assets/sport.jpeg'),
    chosed: false,
  },
  {
    name: 'Business',
    image: require('../assets/business.jpeg'),
    chosed: false,
  },
  {
    name: 'News',
    image: require('../assets/news.png'),
    chosed: false,
  },
];

const ChooseCategory = ({navigation}) => {
  const route = () => {
    navigation.push('Follow');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Categories</Text>
      <ScrollView>
        <View style={styles.categories}>
          {categories.map((item, index) => {
            return (
              <Category
                key={index}
                name={item.name}
                img={item.image}
                chosed={item.chosed}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.more}>
          <View>
            <Text style={styles.moreText}>See more</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.next} onPress={route}>
          <View style={styles.text}>
            <Text style={styles.nextText}>Next Step</Text>
            <Icon name="chevron-right" color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-around',
    marginTop: 10,
  },
  more: {
    backgroundColor: 'transparent',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    marginBottom: 6,
    width: '90%',
  },
  next: {
    backgroundColor: 'purple',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    width: '90%',
  },
  nextText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  moreText: {
    color: 'purple',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btns: {
    width: '100%',
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChooseCategory;
