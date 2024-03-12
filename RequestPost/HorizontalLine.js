import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10, 
  },
  horizontalLine: {
    borderBottomColor: '#CCCCCC', 
    borderBottomWidth: 2, 
  },
});

export default HorizontalLine;