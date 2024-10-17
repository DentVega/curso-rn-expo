
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@/firebase.Config';

export const addMessage = async (chatId: string, senderId: string, text: string) => {
  try {
    await addDoc(collection(db, `chats/${chatId}/messages`), {
      senderId,
      text,
      timestamp: Timestamp.now(),
    });
    console.log('Mensaje enviado');
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    throw error;
  }
};

// Obtener mensajes en tiempo real de un chat
export const getMessages = (chatId: string, callback: (messages: any[]) => void) => {
  const messagesQuery = query(
    collection(db, `chats/${chatId}/messages`),
    orderBy('timestamp', 'asc')
  );
  
  // Escuchar los mensajes en tiempo real
  const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
    const messages: any[] = [];
    snapshot.forEach((doc) => {
      messages.push(doc.data());
    });
    callback(messages);
  });

  return unsubscribe; // Usar para dejar de escuchar los cambios
};
