import React from 'react';
import { Stack } from 'expo-router';

const SettingsRouteLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SettingsRouteLayout;
