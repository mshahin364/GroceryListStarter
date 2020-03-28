import React, {Fragment, useState} from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList} from 'react-native';

import nachos from '../data/nachos';

import ListItem, {Separator} from '../components/ListItem';

export default () => {
  // const [favorite, setFavorite] = useState(false);
  return (
    <SafeAreaView>
      <FlatList
        data={nachos}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name}
            onFavoritePress={() => alert('todo')}
            isFavorite={index < 2}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <Separator />}
      />
    </SafeAreaView>
  );
};
