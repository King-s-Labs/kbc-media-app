import * as React from 'react';

import CurrentPostRequestCard from './CurrentPostRequestCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';

/**
 * Renders a component displaying the requests put in by a Head of Department that 
 * are currently being processed.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {BaseRequestComponent} The rendered component for requests in progress.
 */

const RequestsInProgressComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            Card={CurrentPostRequestCard}
            title="Requests in progress"
        />
    )
};

export default RequestsInProgressComponent;