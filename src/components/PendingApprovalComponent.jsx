import * as React from 'react';

import PendingPostCard from './PendingPostCard';
import BaseRequestComponent from './BaseRequestComponent';


const PendingApprovalComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            CardComponent={PendingPostCard}
            title="Pending approvals"
        />
    )
};

export default PendingApprovalComponent;