import { View, Text, FlatList, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useChats from '@/hooks/useChats';

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
      <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
      <View style={styles.chatDetails}>
        <Text style={styles.sender}>{item.senderId}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        <Text style={styles.timestamp}>
          {new Date(item.timestamp).toLocaleTimeString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  chatDetails: {
    flexDirection: 'column',
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
