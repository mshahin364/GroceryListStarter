import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import nachos from '../data/nachos';

export default () => {
  return (
    <SafeAreaView>
      {nachos.map(item => (
        <Text>Hello</Text>
      ))}
    </SafeAreaView>
  );
};
