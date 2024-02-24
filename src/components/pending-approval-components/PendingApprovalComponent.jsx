import * as React from 'react';

import PendingPostCard from './PendingPostCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';


const PendingApprovalComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            Card={PendingPostCard}
            title="Pending approvals"
        />
    )
};

export default PendingApprovalComponent;