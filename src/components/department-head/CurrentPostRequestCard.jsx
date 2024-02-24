import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';


const CurrentPostRequestCard = ({ post }) => {

    return (
        <BaseCard
            post={post}
            showDepartment={false}
            showReceivedTime={true}
            showPostTime={true}
            showAssignedTo={false}
        />
    )
};

export default CurrentPostRequestCard;