// Settings.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsOptions from './SettingsOptions';
import globalStyles from '../../styles/global';


const Settings = () => {
    // const navigation = useNavigation();

    // const renderItem = ({ item }) => (
    //     <TouchableOpacity activeOpacity={0.3} onPress={item.handler}>
    //         <Text style={[styles.item, globalStyles.medium]}>{item.name}</Text>
    //     </TouchableOpacity>
    // );

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="chevron-back" size={35} color="#000" />
            </TouchableOpacity>
            <FlatList
                data={SettingsOptions(navigation)}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            /> */}
            <Text>Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Settings;