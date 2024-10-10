import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-reanimated';
import '../firebase.Config';

import { useColorScheme } from '@/hooks/useColorScheme';
import { addUser, addUserWithCustomId, getUsers, snapshotUser, updateUser } from '@/firebase/fbUsers';
import { createUserEmailAndPassword } from '@/firebase/fbAuth';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<any>(null);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    getUsers().then((res) => {
      if (res && !res.empty) {
        const docs = res.docs.map((doc) => doc.data());
        setUser(docs[0]);
      }
    });
    // addUserWithCustomId({ email: 'bdvega7@gmail.com', id: 'asodasdasdas', lastName: 'Hidalgo', name: 'Dennis' }).then();
    // updateUser('asodasdasdas', 'Denis').then();
    // snapshotUser();
    createUserEmailAndPassword('bdvega7@gmail.com', 'expo2024')
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log(`createUserEmailAndPassword error: ${error.message}`);
      });
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, marginTop: 30 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {user && <Text>{JSON.stringify(user).toString()}</Text>}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </View>
  );
}
