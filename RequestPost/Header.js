import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
    return (
        <View style={styles.headerContainer}>

            <Icon style={styles.headerIcon} name={"left"} size={width * 0.1} color="#000" /> 
            
            <Text style={styles.headerText}>
                REQUEST A POST
            </Text>
        </View>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff', 
    flexDirection: 'row',
  },
  headerText: {
    fontSize: width * 0.1, 
  },
  headerIcon: {
    paddingTop: height*0.005, 
  },
});

export default Header;