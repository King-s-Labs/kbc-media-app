import { 
  StyleSheet, 
  SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import RequestPost from './RequestPost/RequestPost';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <RequestPost />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop:'2%',
  }
});
