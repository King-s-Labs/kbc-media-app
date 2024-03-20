import React, { useState } from 'react';
import {
	View, Button, TextInput,
} from 'react-native';
import { LocalIP } from '../IPIndex';

function RegisterScreen({ navigation }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// TO DO: Add handleRegister function here
	
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput placeholder="Username" onChangeText={setUsername} value={username} />
			<TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
			<Button title="Register"/> 
			{/* onPress={handleRegister} */}
		</View>
	);
}

export default RegisterScreen;
