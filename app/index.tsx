import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationButtons from '@/components/buttons/NavigatorButtons';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <NavigationButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
