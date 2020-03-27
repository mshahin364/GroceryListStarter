import React, {Fragment} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';

import nachos from '../data/nachos';

import ListItem, {Separator} from '../components/ListItem';

export default () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {nachos.map(item => (
          <Fragment key={item.id}>
            <ListItem name={item.name} />
            <Separator />
          </Fragment>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
