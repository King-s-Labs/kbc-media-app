import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';


const PendingPostCard = ({ post }) => {

    return (
        <BaseCard
            post={post}
            showDepartment={false}
            showReceivedTime={true}
            showPostTime={true}
            showAssignedTo={true}
        />
    )
};

export default PendingPostCard;