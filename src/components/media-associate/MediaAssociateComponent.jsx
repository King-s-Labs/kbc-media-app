import * as React from 'react';
import PendingApprovalComponent from '../pending-approval-components/PendingApprovalComponent';
import AssignedPostsComponent from './AssignedPostsComponent';

/**
 * Render a dashboard component for a Media Associate.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {JSX.Element} The rendered dashboard component for a Media Associate.
 */
const MediaAssociateComponent = ({ posts }) => {
    return (
        <>
            <AssignedPostsComponent posts={posts} />
            <PendingApprovalComponent posts={posts} />
        </>
    )
};

export default MediaAssociateComponent;