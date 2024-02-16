import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import formatDate from '../../utils/formatDate';;
import PostTypeIcon from '../PostTypeIcon';


const IncomingRequestCard = ({ name, department, post_time, time_sent_at, due_date, approved, needs_approval, assigned_to, post_type }) => {

    return (
        <Card mode="outlined"
            style={styles.cardStyle}>
            <Card.Content style={styles.cardContent}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleStyle} variant="titleLarge">{name}</Text>
                        <Text variant="bodyLarge">Requested by <Text style={styles.italicText}>{department}</Text></Text>
                        <Text variant="bodyLarge">Received {formatDate(time_sent_at)}</Text>
                        <Text variant="bodyLarge">Due {formatDate(due_date)}</Text>
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

    iconStyle: {
        backgroundColor: "transparent",
        fontSize: 40,
        margin: 30,
    },

    italicText: {
        fontStyle: "italic",
    }
})

export default IncomingRequestCard;