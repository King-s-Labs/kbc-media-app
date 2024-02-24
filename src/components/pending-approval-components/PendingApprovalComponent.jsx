import * as React from 'react';

import PendingPostCard from './PendingPostCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';

/**
 * Render a component displaying all posts that are pending approval from
 * Head of Media and other heads of departments.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {BaseRequestComponent} The rendered component containing all posts pending approval.
 */

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