import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SettingsTabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'color', headerTransparent: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleStyle: { width: 0, height: 0 },
          tabBarIcon: ({ color }) => <FontAwesome size={28} name={'home'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="generalSettings"
        options={{
          title: 'Settings',
          headerTitleStyle: { width: 0, height: 0 },
          tabBarIcon: ({ color }) => <FontAwesome size={28} name={'home'} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default SettingsTabLayout;
