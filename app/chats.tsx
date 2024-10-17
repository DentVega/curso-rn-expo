import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import useChats from '@/hooks/useChats';
import Footer from '@/components/Footer'; 

interface Chat {
  id: string;
  senderId: string;
  lastMessage: string;
  timestamp: number;
}

const ChatsScreen: React.FC = () => {
  const chats = useChats();

  const renderItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity style={styles.chatContainer}>
      <Text style={styles.sender}>{item.senderId}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleTimeString()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Footer title="Navigate" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sender: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
  },
  timestamp: {
    fontSize: 10,
    color: 'lightgray',
  },
});

export default ChatsScreen;
