import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SettingsRouteLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'color' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name={'home'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="generalSettings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name={'home'} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default SettingsRouteLayout;
