import { addDoc, collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase.Config';

const collectionName = 'users';

export const addUser = async (user: any) => {
  try {
    await setDoc(doc(db, collectionName, user.id), {
      id: user.id,
      email: user.email,
      name: user.name,
      profilePicture: user.profilePicture || '',
      status: user.status || 'Hey there! I am using WhatsApp.',
    });
    console.log('Usuario añadido con ID:', user.id);
  } catch (error) {
    console.error('Error al añadir usuario:', error);
    throw error;
  }
};


export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const users: any[] = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

export const updateUser = async (userId: string, data: any) => {
  try {
    const userRef = doc(db, collectionName, userId);
    await updateDoc(userRef, data);
    console.log('Usuario actualizado:', userId);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
};

export const getUserById = async (userId: string) => {
  try {
    const userRef = doc(db, collectionName, userId);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      return userSnapshot.data();
    } else {
      console.log('No se encontró el usuario con el ID:', userId);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    throw error;
  }
};
