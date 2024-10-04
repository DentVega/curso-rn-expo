import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '@/components/buttons/BackButton';

const Header = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '5%',
  },
});

export default Header;
