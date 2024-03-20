import React, { useState } from 'react';
import {
	View, TextInput, Button, StyleSheet,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalIP } from '../IPIndex';
import { useUser } from '../../contexts/UserContext';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 16,
		padding: 8,
	},
});

function Login({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { updateUserDetails } = useUser();

	// TO DO: Add handleLogin function here

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Username"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Login"/>
			{/* onPress={handleLogin}  */}
		</View>
	);
}

export default Login;
