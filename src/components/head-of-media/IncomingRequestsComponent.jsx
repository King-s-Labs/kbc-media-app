import * as React from 'react';

import IncomingRequestCard from './IncomingRequestCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';


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