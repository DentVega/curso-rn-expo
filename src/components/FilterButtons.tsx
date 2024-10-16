
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterButtons = () => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>No leídos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Grupos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingVertical: 10,
      backgroundColor: '#fff',
      width: '100%',
      paddingLeft: 15,  
    },
    filterButton: {
      paddingVertical: 5,
      paddingHorizontal: 15,
      backgroundColor: '#e0f7fa',
      borderRadius: 20,
      marginRight: 10,
    },
    filterText: {
      color: '#075e54',
      fontWeight: 'bold',
    },
  });
  

export default FilterButtons