import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const Category = ({name, img, chosed}) => {
  const [chosen, setChosen] = React.useState(chosed);
  const setChosed = () => {
    if (chosen) {
      setChosen(false);
    } else {
      setChosen(true);
    }
  };
  return (
    <TouchableOpacity onPress={setChosed}>
      <View style={styles.container}>
        <View style={styles.shade}>
          <Image style={styles.image} source={img} />
          <View style={[styles.details, {opacity: chosen ? 0.5 : 0}]}>
            <Text style={styles.text}> {name} </Text>
            <Icon style={styles.icon} name="check" color="white" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  image: {
    borderRadius: 10,
    height: 100,
    width: 150,
  },
  details: {
    borderRadius: 10,
    height: 100,
    width: 150,
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  icon: {},
});

export default Category;
