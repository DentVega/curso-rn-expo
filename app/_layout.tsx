import React from 'react';
import { View } from 'react-native';
import { Stack, Navigator } from 'expo-router';
import Slot = Navigator.Slot
// import ChatsScreen from '../screens/ChatsScreen';

export default function RouteLayout() {
  return (
    <View style ={{width: '100%', height: '100%', backgroundColor: 'green'}}>
      <Stack initialRouteName="chats">
        <Stack.Screen name="chats"/>
        <Stack.Screen name="calls" />
      </Stack>
    {/* <Slot>

    </Slot> */}
    </View>
  );
}
