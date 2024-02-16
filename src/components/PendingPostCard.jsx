import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import formatDate from '../utils/formatDate';


const PostTypeIcon = ({ post_type }) => {
    if (!post_type) {
        return null
    }

    return (
        <Icon name={post_type}
            size={50}
            color="black" />
    );
};

const PendingPostCard = ({ name, post_time, time_sent_at, due_date, approval, needs_approval, assigned_to, post_type }) => {

    return (
        <Card mode="outlined"
            style={styles.cardStyle}>
            <Card.Content style={styles.cardContent}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStyle} variant="titleLarge">{name}</Text>
                        <Text variant="bodyLarge">{formatDate(post_time)}</Text>
                        <Text variant="bodyLarge">{approval ? "Approved" : "Pending approval"}</Text>
                        <Text style={styles.mutedText} variant="bodyLarge">{
                        assigned_to ? 
                        `Assigned to ${assigned_to}` 
                        : `Not assigned to anyone` 
                        }</Text>
                    </View>
                    <PostTypeIcon post_type={post_type} />
                </View>
            </Card.Content>
        </Card>
    )
};

const styles = StyleSheet.create({
    cardStyle: {
        marginHorizontal: 20,
        marginBottom: 20,
    },

    cardContent: {
        padding: 30,
    },

    content: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textContainer: {
        flex: 1,
    },

    titleStyle: {
        fontWeight: "bold",
    },

    mutedText: {
        color: "gray",
    },
    iconStyle: {
        backgroundColor: "transparent",
        fontSize: 40,
        margin: 30,
    },
})

export default PendingPostCard;