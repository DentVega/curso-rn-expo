import React from 'react';import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({title}) => {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => router.push('calls' as any)}>
          <Text style={styles.buttonText}>Calls</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('status' as any)}>
          <Text style={styles.buttonText}>Status</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('chats' as any)}>
          <Text style={styles.buttonText}>Chats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#075E54',
    height: 60,
    paddingHorizontal: 15,
    position: 'absolute', 
    bottom: 0, 
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
  },
});

export default Footer;
