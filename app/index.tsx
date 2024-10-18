// import React from 'react';
// import { View, Text} from 'react-native';
// import { Navigator } from 'expo-router';
// import Slot = Navigator.Slot
// import useAppNavigation from '@/hooks/useAppNavigation';
// import useInterval from '@/hooks/useInterval';
// // import ChatsScreen from '../screens/ChatsScreen';

// export default function RouteLayout() {
//   const { replaceTo } = useAppNavigation();

//   const verifyNavigation = () => {
//     replaceTo('chats');
//   };

//   useInterval(verifyNavigation, 3000);
//     return (
//     <View>
//       <Text>Loading</Text>
//     {/* <Slot>

//     </Slot> */}
//     </View>
//   );
// }


// import { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CallsScreen from './calls'; // Importa tu pantalla de llamadas
// import StatusScreen from './status'; // Importa tu pantalla de estado
// import ChatsScreen from './chats'; // Importa tu pantalla de chats

// const Tab = createBottomTabNavigator();

// export default function RouteLayout() {
//   const [loading, setLoading] = useState(true); // Estado de carga

//   // Este useEffect establece el estado de carga después de 3 segundos.
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Tiempo de carga (3 segundos)

//     return () => clearTimeout(timer); // Limpieza del timer al desmontar
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <Text style={styles.loadingText}>Loading...</Text>
//         </View>
//       ) : (
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
//           <Tab.Screen 
//             name="Calls" 
//             component={CallsScreen} 
//           />
//           <Tab.Screen 
//             name="Status" 
//             component={StatusScreen} 
//           />
//           <Tab.Screen 
//             name="Chats" 
//             component={ChatsScreen} 
//           />
//         </Tab.Navigator>
//       )}
//     </>
//   );
// }

// // Estilos
// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


// import { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import CallsScreen from './calls'; // Importa tu pantalla de llamadas
// import StatusScreen from './status'; // Importa tu pantalla de estado
// import ChatsScreen from './chats'; // Importa tu pantalla de chats
// import { Ionicons } from '@expo/vector-icons'; // Importa los iconos

// const Tab = createBottomTabNavigator();

// export default function RouteLayout() {
//   const [loading, setLoading] = useState(true); // Estado de carga

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Tiempo de carga (3 segundos)

//     return () => clearTimeout(timer); // Limpieza del timer al desmontar
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <Text style={styles.loadingText}>Loading...</Text>
//         </View>
//       ) : (
//         <Tab.Navigator
//           screenOptions={{
//             headerShown: false,
//             tabBarStyle: styles.tabBar, // Referencia al estilo de la barra de pestañas
//             tabBarLabelStyle: styles.tabBarLabel,
//             tabBarActiveTintColor: 'white', // Color de las etiquetas activas
//             tabBarInactiveTintColor: 'lightgray', // Color de las etiquetas inactivas
//           }}
//         >
//           <Tab.Screen 
//             name="Calls" 
//             component={CallsScreen} 
//             options={{
//               tabBarIcon: ({ color }) => <Ionicons name="call" size={24} color={color} />,
//             }}
//           />
//           <Tab.Screen 
//             name="Status" 
//             component={StatusScreen} 
//             options={{
//               tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />,
//             }}
//           />
//           <Tab.Screen 
//             name="Chats" 
//             component={ChatsScreen} 
//             options={{
//               tabBarIcon: ({ color }) => <Ionicons name="chatbubbles" size={24} color={color} />,
//             }}
//           />
//         </Tab.Navigator>
//       )}
//     </>
//   );
// }

// // Estilos
// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   tabBar: {
//     backgroundColor: '#075E54', // Color de fondo de la barra de pestañas
//     borderTopWidth: 0, // Quita el borde superior
//     height: 60, // Altura de la barra de pestañas
//   },
//   tabBarLabel: {
//     fontSize: 14, // Tamaño de fuente de las etiquetas
//     marginBottom: 5, // Espacio debajo de la etiqueta
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      router.replace('/tabs' as any); // Redirecciona a la pantalla de chats en las tabs
    }, 3000); // Simula un tiempo de carga de 3 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [router]);

  return (
    <View style={styles.loadingContainer}>
      {loading ? <Text style={styles.loadingText}>Loading...</Text> : null}
    </View>
  );
}

// Estilos para la pantalla de carga
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
