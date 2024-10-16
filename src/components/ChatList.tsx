import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.Config';

interface ChatMessage {
  id: string;
  name: string;
  message: string;
  profileImage?: string;
  createdAt: string;
}

const ChatList = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'chats'));

        if (!querySnapshot.empty) {
          const chatData = querySnapshot.docs.map((doc) => {
            const data = doc.data();

            const createdAt = data.createdAt?.seconds
              ? new Date(data.createdAt.seconds * 1000).toLocaleTimeString ()
              : 'Fecha no disponible';

            return {
              id: doc.id,
              name: data.name || 'Nombre no disponible',
              message: data.message || 'Mensaje no disponible',
              profileImage: data.profileImage,
              createdAt: data.createdAt ? createdAt : 'Fecha no disponible',
            };
          });

          console.log('Chat history fetched:', chatData);
          setChatHistory(chatData);
        } else {
          console.log('No chats found');
        }
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <View>
              {item.profileImage && (
                <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
              )}
            </View>
            <View style={styles.messageContent}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
              <Text style={styles.timeText}>{item.createdAt}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 15,
    width: '100%',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    paddingLeft: 15, 
  },
  messageText: {
    fontSize: 16,
    color: 'gray',
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
    position: 'absolute',
    right: 0,
    
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
  },
});

export default ChatList;
