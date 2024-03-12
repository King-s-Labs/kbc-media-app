import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UploadComponent = () => {
  const handleLinkPress = () => {
    // Handle linking action
  };

  const handleUploadPress = () => {
    // Handle uploading action
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLinkPress}>
        <Text style={styles.buttonText}>Link</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleUploadPress}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f0f0f0', 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#333', 
    fontSize: 16,
  },
});

export default UploadComponent;