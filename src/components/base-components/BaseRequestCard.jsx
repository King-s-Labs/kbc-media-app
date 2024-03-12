import * as React from 'react';

import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

import SwipeableComponent from './SwipeableComponent';

import formatDate from '../../utils/formatDate';;
import PostTypeIcon from '../icons/PostTypeIcon';

import CardStyles from '../../styles/PostCardStyles';

/**
 * Handler for deleting a request.
 */
const handleDeleteRequest = () => {
    console.log("Deleted...?");
}

/**
* Renders a base request card with customisable display options.
* 
* @param {object} post - The post object containing information about the request.
* @param {boolean} showDepartment - Whether to display the department information.
* @param {boolean} showReceivedTime - Whether to display the received time information.
* @param {boolean} showPostTime - Whether to display the post time information.
* @param {boolean} showAssignedTo - Whether to display the assigned to information.
* @returns {JSX.Element} The rendered base request card component.
*/

const BaseRequestCard = ({
    post,
    showDepartment,
    showReceivedTime,
    showPostTime,
    showAssignedTo,
}) => {

    const { name, department, post_time, time_sent_at, due_date, approved, requested_approval, assigned_to, post_type } = post;

    return (
        <SwipeableComponent 
            onDelete={handleDeleteRequest}
        >
            <Card mode="outlined">
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
                                    : `Not scheduled to be posted yet`
                            }</Text>}
                            <Text variant="bodyLarge">{
                                due_date ?
                                    `Due for ${formatDate(due_date)}`
                                    : `No due date set`
                            }</Text>
                            <Text variant="bodyLarge">{approved ? "Approved" : "Not approved"}</Text>
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
        </SwipeableComponent>
    )
};

export default BaseRequestCard;