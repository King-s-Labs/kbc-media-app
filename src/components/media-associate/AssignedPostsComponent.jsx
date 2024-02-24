import * as React from 'react';

import AssignedPostCard from './AssignedPostCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';


const AssignedPostsComponent = ({ posts }) => {
    return (
        <BaseRequestComponent
            posts={posts}
            Card={AssignedPostCard}
            title="Current assignments"
        />
    )
};

export default AssignedPostsComponent;