import React from 'react';
import { View, Text} from 'react-native';
import { Navigator } from 'expo-router';
import Slot = Navigator.Slot
import useAppNavigation from '@/hooks/useAppNavigation';
import useInterval from '@/hooks/useInterval';
// import ChatsScreen from '../screens/ChatsScreen';

export default function RouteLayout() {
  const { replaceTo } = useAppNavigation();

  const verifyNavigation = () => {
    replaceTo('chats');
  };

  useInterval(verifyNavigation, 3000);
    return (
    <View>
      <Text>Loading</Text>
    {/* <Slot>

    </Slot> */}
    </View>
  );
}
