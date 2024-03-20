import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/DashboardScreen';
import Navbar from './components/Navbar';
import Settings from './screens/Settings/Settings';
import { COLOURS } from './src/constants';


const Stack = createNativeStackNavigator();

/**
 * App is the root component of the application.
 * It sets up a navigation container with a stack navigator.
 * The stack navigator includes the 'Navbar' and 'Settings' screens.
 * The 'Navbar' screen is set as the initial screen.
 * The headers for both screens are hidden.
 *
 * @returns {React.Element} The rendered navigation container.
 */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                        contentStyle: {
                          backgroundColor: COLOURS.BACKGROUND_COLOUR,
                        }
                      }} initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{headerShown: false,}}
          />
          <Stack.Screen 
          name="Navbar" 
          component={Navbar} 
          options={{ 
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
