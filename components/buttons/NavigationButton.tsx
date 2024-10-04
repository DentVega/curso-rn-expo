import React from 'react';
import { useRouter } from 'expo-router';
import { Text, Pressable, StyleSheet } from 'react-native';

interface Props {
  route: string;
  label: string;
}

const NavigationButton = ({ route, label = '' }: Props) => {
  const router = useRouter();
  return (
    <Pressable style={styles.container} onPress={() => router.push(route as any)}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '15%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#378722',
  },
  text: {
    color: 'white',
  },
});

export default NavigationButton;
