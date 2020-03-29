import React, {Fragment, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import nachos from '../data/nachos';

import ListItem, {Separator} from '../components/ListItem';
import AddItem from '../components/AddItem';
import uuid from 'uuid/v4';

export default () => {
  const [list, setList] = useState(nachos);

  const addItem = text => {
    setList([{id: uuid(), name: text}, ...list]);
  };

  const removeItem = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        {/* <AddItem /> */}
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <ListItem
              name={item.name}
              onFavoritePress={() => alert('todo')}
              isFavorite={index < 2}
              onAddedSwipe={() => removeItem(item.id)}
              onDeleteSwipe={() => removeItem(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Separator />}
          ListHeaderComponent={() => (
            <AddItem
              onSubmitEditing={({nativeEvent: {text}}) => addItem(text)}
            />
          )}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
