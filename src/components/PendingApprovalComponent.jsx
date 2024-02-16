import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import PendingPostCard from './PendingPostCard';


const PendingApprovalComponent = ({ posts }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">Pending approvals ({posts.length})</Text>
            {posts.map((post, index) => (
                <PendingPostCard key={index} {...post} />
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

export default PendingApprovalComponent;