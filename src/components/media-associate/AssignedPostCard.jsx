import * as React from 'react';

import BaseCard from '../BaseRequestCard';


const AssignedPostCard = ({ name, department, post_time, time_sent_at, due_date, approved, needs_approval, assigned_to, post_type }) => {

    return (
        <BaseCard
            name={name}
            department={department}
            post_time={post_time}
            time_sent_at={time_sent_at}
            due_date={due_date}
            approved={approved}
            assigned_to={assigned_to}
            post_type={post_type}
            showDepartment={true}
            showReceivedTime={true}
            showPostTime={true}
            showAssignedTo={false}
        />
        // <Card mode="outlined"
        //     style={styles.cardStyle}>
        //     <Card.Content style={styles.cardContent}>
        //         <View style={styles.content}>
        //             <View style={styles.textContainer}>
        //                 <Text style={styles.titleStyle} variant="titleLarge">{name}</Text>
        //                 <Text variant="bodyLarge">Requested by {department}</Text>
        //                 <Text variant="bodyLarge">{
        //                     post_time ? 
        //                     `Scheduled for ${formatDate(post_time)}`
        //                     : `Due for ${formatDate(due_date)}`
        //                 }</Text>
        //                 <Text variant="bodyLarge">{approved ? "Approved" : "Pending approval"}</Text>
        //             </View>
        //             <PostTypeIcon post_type={post_type} />
        //         </View>
        //     </Card.Content>
        // </Card>
    )
};

export default AssignedPostCard;