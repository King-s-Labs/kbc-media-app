import * as React from 'react';

import CurrentPostRequestCard from './CurrentPostRequestCard';
import BaseRequestComponent from '../BaseRequestComponent';


const RequestsInProgressComponent = ({ posts }) => {
    return (
        <BaseRequestComponent 
            posts={posts}
            CardComponent={CurrentPostRequestCard}
            title="Requests in progress"
        />
    )
};

export default RequestsInProgressComponent;