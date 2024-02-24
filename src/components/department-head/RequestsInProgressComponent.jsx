import * as React from 'react';

import CurrentPostRequestCard from './CurrentPostRequestCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';


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