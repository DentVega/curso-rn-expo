import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChatsScreen from '../screens/ChatsScreen';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen 
      name="WhatsApp" 
      component={ChatsScreen}
      options={{
        headerTitle: 'WhatsApp',
        headerStyle: {
          backgroundColor: '#075e54',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <FontAwesome name="camera" size={24} color="white" style={{ marginHorizontal: 10 }} />
            <FontAwesome name="search" size={24} color="white" style={{ marginHorizontal: 10 }} />
            <MaterialIcons name="more-vert" size={24} color="white" style={{ marginHorizontal: 10 }} />
          </View>
        ),
      }}
    />
     </Stack.Navigator>  
  )
}

export default MainNavigator