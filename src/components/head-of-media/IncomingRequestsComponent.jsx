import * as React from 'react';

import IncomingRequestCard from './IncomingRequestCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';

/**
 * Renders a component displaying the incoming post requests from other heads of departments.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {JSX.Element} The rendered component containing incoming post cards.
 */

const IncomingRequestsComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            Card={IncomingRequestCard}
            title="Incoming requests"
        />
    )
};

export default IncomingRequestsComponent;