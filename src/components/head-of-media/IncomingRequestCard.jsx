import * as React from 'react';

import BaseCard from '../base-components/BaseRequestCard';

/**
 * Renders a card for an incoming post request from heads of departments.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {JSX.Element} The rendered card for incoming post requests.
 */

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