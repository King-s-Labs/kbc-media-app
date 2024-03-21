import PendingApprovalComponent from "../pending-approval-components/PendingApprovalComponent";
import RequestsInProgressComponent from "./RequestsInProgressComponent";
import PostRequestButton from "./buttons/PostRequestButton";

/**
 * Renders the dashboard component for a Head of Department.
 * 
 * @param {*} posts - An array of post objects to render in the component.
 * @returns {JSX.Element} The rendered component for a Head of Department.
 */

const DepartmentHeadComponent = ({ posts }) => {
    return (
        <>
            <PostRequestButton onPress={() => console.log("Pressed create post request!")} 
                               iconType="add-circle-outline" buttonText="Create a post request" />
            <PostRequestButton onPress={() => console.log("Pressed copy post request!")} 
                               iconType="copy-outline" buttonText="Copy a previous post request" />
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