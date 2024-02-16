import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CurrentPostRequestCard from './CurrentPostRequestCard';

const RequestsInProgressComponent = ({ posts }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">Requests in Progress ({posts.length})</Text>
            {posts.map((post, index) => (
                <CurrentPostRequestCard key={index} {...post} />
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

export default RequestsInProgressComponent;