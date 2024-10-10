import { addDoc, collection, doc, getDocs, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase.Config';

const collectionName = 'users';

export const getUsers = async () => {
  const results = await getDocs(collection(db, collectionName));
  results.forEach((doc) => {
    console.log('User', doc.data());
  });

  return results;
};

export const addUser = async (user: any) => {
  const docRef = await addDoc(collection(db, collectionName), {
    id: user.id,
    email: user.email,
    lastName: user.lastName,
    name: user.name,
  });

  console.log('id', docRef.id);
};

export const addUserWithCustomId = async (user: any) => {
  let ref = doc(db, collectionName, user.id);

  const result = await setDoc(ref, user);
  console.log('user', result);
};

export const updateUser = async (userId: string, name: string) => {
  const userRef = doc(db, collectionName, userId);
  const response = await updateDoc(userRef, {
    name: name,
  });
  console.log('user', response);
};

export const snapshotUser = () => {
  const unsub = onSnapshot(doc(db, collectionName, 'asodasdasdas'), (doc) => {
    console.log('snapshot', doc.data());
  });
};
