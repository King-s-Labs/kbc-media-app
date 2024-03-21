import React, { useState } from 'react';
import {
	View, Button, TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalIP } from '../IPIndex';

function LoginScreen({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// TO DO: Add handleLogin function here
	
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput placeholder="Username" onChangeText={setUsername} value={username} />
			<TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
			<Button title="Log In"/>
			{/* onPress={handleLogin}  */}
		</View>
	);
}

export default LoginScreen;
