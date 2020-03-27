import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

const ListItem = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default ListItem;
