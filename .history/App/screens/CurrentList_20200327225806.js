import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import nachos from '../data/nachos';

import ListItem from '../components/ListItem';

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {nachos.map(item => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
