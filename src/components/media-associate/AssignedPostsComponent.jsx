import * as React from 'react';

import AssignedPostCard from './AssignedPostCard';
import BaseRequestComponent from '../BaseRequestComponent';


const AssignedPostsComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            CardComponent={AssignedPostCard}
            title="Current assignments"
        />
    )
};

export default AssignedPostsComponent;