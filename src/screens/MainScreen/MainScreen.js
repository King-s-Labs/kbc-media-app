import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, SafeAreaView} from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
			<Text style={styles.welcomeText}>Welcome to the KBC Media App!</Text>
			<Text style={styles.instructionsText}>Please log in or register to continue.</Text>
			<View style={styles.optionsContainer}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
					<Text style={styles.buttonText}>Log In</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>
			</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0e8e8', // Light burgundy background
    },
	welcomeText: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: '5%',
	},
	instructionsText: {	
		fontSize: 18,
		marginBottom: '5%',
	},
	optionsContainer: {
		// flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0e8e8', // Light burgundy background
		// marginTop: '50%',
		width: '60%',
		// height: '20%',
	},
    button: {
        backgroundColor: '#800020', // Burgundy color
        padding: 10,
        borderRadius: 20,
		height: 'auto',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        elevation: 3, // Adding some shadow for depth
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MainScreen;
