import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CallsScreen from './calls'; // Ruta hacia tu archivo de la pantalla de llamadas
import StatusScreen from './status'; // Ruta hacia tu archivo de la pantalla de estado
import ChatsScreen from './chats'; // Ruta hacia tu archivo de la pantalla de chats
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar, // Estilo personalizado para las tabs
        tabBarLabelStyle: styles.tabBarLabel, // Estilo de las etiquetas
        tabBarActiveTintColor: 'white', // Color de las pestañas activas
        tabBarInactiveTintColor: 'lightgray', // Color de las pestañas inactivas
      }}
    >
      <Tab.Screen 
        name="calls" 
        component={CallsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="call" size={20} color={color} />,
        }}
      />
      <Tab.Screen 
        name="status" 
        component={StatusScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={20} color={color} />,
        }}
      />
      <Tab.Screen 
        name="chats" 
        component={ChatsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

// Estilos para las pestañas
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#075E54', // Color de fondo de las pestañas
    borderTopWidth:0, // Quita el borde superior
    paddingTop:15,
    height: 80, // Altura de la barra de pestañas
  },
  tabBarLabel: {
    fontSize: 14, // Tamaño de las etiquetas
    marginBottom: 0, // Espacio bajo las etiquetas
  },
});
