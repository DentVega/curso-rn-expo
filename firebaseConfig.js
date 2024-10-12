import firebase from '@react-native-firebase/app';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'apiKey',
    authDomain: 'authDomain',
    projectId: 'projectId',
    storageBucket: 'storageBucket',
    messagingSenderId: 'messagingSenderId',
    appId: 'appId',
  });
} else {
  firebase.app();
}
