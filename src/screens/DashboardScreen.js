import { StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen() {
    return (
        <View style={style.container}>
            <Text>This is the dashboard.</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });