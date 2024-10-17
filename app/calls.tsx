import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Footer';

const CallsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Calls" />
      <Text>llamaditas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CallsScreen;
