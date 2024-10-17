import { useEffect, useState } from 'react';
import { db } from '@/firebase.Config'; 
import { collection, onSnapshot } from 'firebase/firestore';

const useChats = () => {
  const [chats, setChats] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
      const chatsData: any[] = [];
      snapshot.forEach((doc) => {
        chatsData.push({ id: doc.id, ...doc.data() });
      });
      setChats(chatsData);
    });

    return () => unsubscribe();
  }, []);

  return chats;
};

export default useChats;
