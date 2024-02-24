import * as React from 'react';

import BaseCard from './BaseRequestCard';


const PendingPostCard = ({ name, department, post_time, time_sent_at, due_date, approved, needs_approval, assigned_to, post_type }) => {

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
            showDepartment={false}
            showReceivedTime={true}
            showPostTime={true}
            showAssignedTo={true}
        />
    )
};

export default PendingPostCard;