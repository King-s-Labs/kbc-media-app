// Settings.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


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


const Drafts = () => {

    return (
        <View style={styles.container}>
            <Text>Drafts</Text>
        </View>
    );
};

export default Drafts;