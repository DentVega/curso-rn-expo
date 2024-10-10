import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/firebase.Config';

export const createUserEmailAndPassword = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  // console.log('user', user);
  return user;
};
