import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';


const BaseRequestComponent = ({ posts, Card, title }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">{title} ({posts.length})</Text>
            {posts.map((post, index) => (
                <Card key={index} post={post} />
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

export default BaseRequestComponent;