// React related imports
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

// Dashboard related imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// Component imports


// Fake database

// Dashboard screen
const Dashboard = () => {

  return (
    <SafeAreaView style={styles.container}>
      
      <Text>Dashboard</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default Dashboard;
