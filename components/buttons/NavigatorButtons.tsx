import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NavigationButton from '@/components/buttons/NavigationButton';

const NavigationButtons = () => {
  return (
    <View>
      <Text>Navegacion</Text>
      <View style={styles.containerButtons}>
        <NavigationButton label={'Settings'} route={'settings'} />
        <NavigationButton label={'Profile'} route={'profile'} />
        <NavigationButton label={'Drawer'} route={'drawer'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
  },
});

export default NavigationButtons;
