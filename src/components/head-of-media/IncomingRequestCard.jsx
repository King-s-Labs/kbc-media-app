import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';


const IncomingRequestCard = ({ post }) => {

    return (
        <BaseCard
            post={post}
            showDepartment={true}
            showReceivedTime={true}
            showPostTime={true}
            showAssignedTo={true}
        />
    )
};

export default IncomingRequestCard;