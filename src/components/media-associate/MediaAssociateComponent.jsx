import * as React from 'react';
import PendingApprovalComponent from '../pending-approval-components/PendingApprovalComponent';
import AssignedPostsComponent from './AssignedPostsComponent';

const MediaAssociateComponent = ({ posts }) => {
    return (
        <>
            <AssignedPostsComponent posts={posts} />
            <PendingApprovalComponent posts={posts} />
        </>
    )
};

export default MediaAssociateComponent;