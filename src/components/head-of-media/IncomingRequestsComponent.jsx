import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import IncomingRequestCard from './IncomingRequestCard';

const IncomingRequestsComponent = ({ posts }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">Incoming Requests ({posts.length})</Text>
            {posts.map((post, index) => (
                <IncomingRequestCard key={index} {...post} />
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: "bold",
        fontSize: 30,
        margin: 20,
    },

})

export default IncomingRequestsComponent;