import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const AnalyticsBox = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', marginLeft: -20}}>
        Profile Analytics
      </Text>
      <View style={styles.analytics}>
        <View style={styles.noPosts}>
          <Text style={styles.number}>70</Text>
          <Text style={styles.text}>Number of Posts</Text>
        </View>
        <View style={styles.followers}>
          <Text style={styles.number}>70</Text>
          <Text style={styles.text}>Number of Followers</Text>
        </View>
        <View style={styles.following}>
          <Text style={styles.number}>70</Text>
          <Text style={styles.text}>Following you</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(184, 228, 243)',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 10,
  },
  analytics: {
    minHeight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  noPosts: {
    padding: 10,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  followers: {
    padding: 5,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderLeftColor: '#ddd',
    borderRightColor: '#ddd',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  following: {
    padding: 14,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  number: {
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default AnalyticsBox;
