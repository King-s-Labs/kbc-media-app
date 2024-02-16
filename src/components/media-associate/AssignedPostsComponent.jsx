import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import AssignedPostCard from './AssignedPostCard';

const AssignedPostsComponent = ({ posts }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">Current assignments ({posts.length})</Text>
            {posts.map((post, index) => (
                <AssignedPostCard key={index} {...post} />
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

export default AssignedPostsComponent;