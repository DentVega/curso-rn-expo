import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const { hasPermission } = useCameraPermission();

  if (!hasPermission)
    return (
      <View>
        <Text>No permisos</Text>
      </View>
    );
  if (device == null)
    return (
      <View>
        <Text>No camara device error</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text style={{ color: '#fff', marginTop: 50 }}>This is the camera</Text>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CameraScreen;
