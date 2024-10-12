import firestore from '@react-native-firebase/firestore';

export const getUsers = async () => {
  const users = await firestore().collection('users').get();
  console.log(
    'users',
    users.docs.map((doc) => doc.data()),
  );
  return users;
};
