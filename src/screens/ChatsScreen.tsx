import { StyleSheet, View } from 'react-native';
import FilterButtons from '../components/FilterButtons';
import ChatList from '../components/ChatList';
import FloatingButton from '../components/FloatingButton';

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <FilterButtons />
      <ChatList />
      <FloatingButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatsScreen;
