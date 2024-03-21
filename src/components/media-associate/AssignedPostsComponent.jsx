import * as React from 'react';

import AssignedPostCard from './AssignedPostCard';
import BaseRequestComponent from '../base-components/BaseRequestComponent';

/**
 * Render a component displaying the assigned posts to a Media Associate.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {BaseRequestComponent} The rendered component containing all assigned posts.
 */

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