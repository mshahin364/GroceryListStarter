import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#696969',
  },
});

const ListItem = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Image source={require('../assets/icons/ios-star-outline.png')} />>
    </View>
  );
};

export default ListItem;
