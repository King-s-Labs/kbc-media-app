import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


const ScrollableScreen = ({ children }) => (
  <ScrollView contentContainerStyle={styles.container}>
    {children}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScrollableScreen;