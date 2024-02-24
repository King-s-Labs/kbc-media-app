import * as React from 'react';

import IncomingRequestCard from './IncomingRequestCard';
import BaseRequestComponent from '../BaseRequestComponent';


const IncomingRequestsComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            CardComponent={IncomingRequestCard}
            title="Incoming requests"
        />
    )
};

export default IncomingRequestsComponent;