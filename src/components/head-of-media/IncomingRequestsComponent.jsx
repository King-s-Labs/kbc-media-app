import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import IncomingRequestCard from './IncomingRequestCard';

const IncomingRequestsComponent = ({ props }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">Requests in Progress ({props.length})</Text>
            {props.map((post, index) => (
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