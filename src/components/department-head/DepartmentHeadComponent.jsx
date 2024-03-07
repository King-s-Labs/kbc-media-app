import CreatePostRequestButton from "./buttons/CreatePostRequestButton";
import CopyPostRequestButton from "./buttons/CopyPostRequestButton";
import PendingApprovalComponent from "../pending-approval-components/PendingApprovalComponent";
import RequestsInProgressComponent from "./RequestsInProgressComponent";

/**
 * Renders the dashboard component for a Head of Department.
 * 
 * @param {*} posts - An array of post objects to render in the component.
 * @returns {JSX.Element} The rendered component for a Head of Department.
 */

const DepartmentHeadComponent = ({ posts }) => {
    return (
        <>
            <CreatePostRequestButton />
            <CopyPostRequestButton />
            <PendingApprovalComponent posts={
                posts.filter(post => post.requested_approval && !post.approved)
            } />
            <RequestsInProgressComponent posts={
                posts.filter(post => !post.approved)
            } />
        </>
    );
};

export default DepartmentHeadComponent;