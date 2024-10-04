import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Navigator } from 'expo-router';
import Slot = Navigator.Slot;

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RootLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ marginTop: insets.top, marginBottom: insets.bottom }}>
      <View style={styles.contentApp}>
        <Header />
        <View style={styles.contentScreens}>
          <Slot />
        </View>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentApp: {
    width: '100%',
    height: '100%',
  },
  contentScreens: {
    flex: 1,
    backgroundColor: '#bebbbb',
  },
});

export default RootLayout;
