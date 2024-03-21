import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';

/**
 * Renders a card displaying current post requests being processed.
 * 
 * @param {object[]} posts - An array of post objects to render in the component.
 * @returns {BaseCard} The rendered card for a currently processed post. 
 */

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