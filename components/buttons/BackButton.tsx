import React from 'react';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigationState } from '@react-navigation/core';

const BackButton = () => {
  const router = useRouter();
  const routes = useNavigationState((state) => state.routes);

  if (routes.length === 1) {
    return null;
  }

  return (
    <Pressable onPress={router.back}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </Pressable>
  );
};

export default BackButton;
