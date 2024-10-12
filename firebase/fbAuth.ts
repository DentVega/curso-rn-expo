import auth from '@react-native-firebase/auth';

export const signupWithEmailPassword = async (email: string, password: string) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    console.log('response', response);
    return response;
  } catch (e: any) {
    console.log('signupWithEmailPassword error:', e.message);
  }
};
