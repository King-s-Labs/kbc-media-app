// React related imports
import React from 'react';
import { View } from 'react-native';

// Navigation related imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Style related imports
import navbarStyles from '../styles/NavbarStyles';

// Component imports
import TabBarIcon from './TabBarIcon';

// Screen imports
import { Dashboard, DraftsPage } from '../screens';

const Tab = createBottomTabNavigator();

const screens = [
    { name: 'Dashboard', component: Dashboard, icon: 'home' },
    { name: 'Drafts', component: DraftsPage, icon: 'file' },
];

const screenOptions = { 
    headerShown: false,
    tabBarStyle: navbarStyles.tabBarStyle,
    tabBarInactiveTintColor: 'gray',
    tabBarActiveTintColor: '#800020',
};

export default function MainTabNavigator() {
    return (
        <View style={navbarStyles.container}>
            <Tab.Navigator 
                initialRouteName="Dashboard"
                screenOptions={screenOptions}
            >
            {screens.map(({ name, component, icon }) => (
                <Tab.Screen 
                    key={name}
                    name={name} 
                    component={component} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <TabBarIcon 
                                name={icon} 
                                color={color} 
                                size={size}
                            />
                        ),
                    }}
                />
            ))}
            </Tab.Navigator>
        </View>
    );
}
