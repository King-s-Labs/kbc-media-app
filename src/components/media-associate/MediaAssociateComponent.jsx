import * as React from 'react';
import PendingApprovalComponent from '../PendingApprovalComponent';
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