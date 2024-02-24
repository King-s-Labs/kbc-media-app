import * as React from 'react';

import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import formatDate from '../../utils/formatDate';;
import PostTypeIcon from '../icons/PostTypeIcon';

import CardStyles from '../../styles/CardStyles';


const BaseRequestCard = ({
    post,
    showDepartment,
    showReceivedTime,
    showPostTime,
    showAssignedTo,
}) => {
    
    const { name, department, post_time, time_sent_at, due_date, approved, needs_approval, assigned_to, post_type } = post;

    return (
        <Card mode="outlined"
            style={CardStyles.outer}>
            <Card.Content style={CardStyles.outerContent}>
                <View style={CardStyles.content}>
                    <View style={CardStyles.textContainer}>

                        <Text style={CardStyles.titleStyle} variant="titleLarge">{name}</Text>

                        {showDepartment && <Text variant="bodyLarge">Requested by {department}</Text>}

                        {showReceivedTime && showDepartment && <Text variant="bodyLarge">Received {formatDate(time_sent_at)}</Text>}

                        {showReceivedTime && !showDepartment && <Text variant="bodyLarge">Sent {formatDate(time_sent_at)}</Text>}

                        {showPostTime && <Text variant="bodyLarge">{
                            post_time ?
                                `Scheduled for ${formatDate(post_time)}`
                                : `Due for ${formatDate(due_date)}`
                        }</Text>}

                        <Text variant="bodyLarge">{approved ? "Approved" : "Pending approval"}</Text>

                        {showAssignedTo && <Text style={CardStyles.mutedText} variant="bodyLarge">{
                            assigned_to ?
                                `Assigned to ${assigned_to}`
                                : `Not assigned to anyone`
                        }</Text>}

                    </View>
                    <PostTypeIcon post_type={post_type} />
                </View>
            </Card.Content>
        </Card>
    )
};

export default BaseRequestCard;