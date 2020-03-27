import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import nachos from '../data/nachos';

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {nachos.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
