import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Footer';

const StatusScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Calls" />
      <Text>estaditos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default StatusScreen;
