import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';


const AssignedPostCard = ({ post }) => {

    return (
        <BaseCard
            post={post}
            showDepartment={true}
            showReceivedTime={true}
            showPostTime={true}
            showAssignedTo={false}
        />
    )
};

export default AssignedPostCard;