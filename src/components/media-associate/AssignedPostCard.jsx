import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';

/**
 * Render a card displaying a post that is assigned to a Media Associate.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {BaseCard} The rendered card for assigned posts.
 */

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