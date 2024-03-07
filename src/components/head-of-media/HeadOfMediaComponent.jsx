import PendingApprovalComponent from "../pending-approval-components/PendingApprovalComponent";
import IncomingRequestsComponent from "./IncomingRequestsComponent";

/**
 * Renders the dashboard component for the Head of Media.
 * 
 * @param {object[]} posts - An array of post objects to render in the component. 
 * @returns {JSX.Element} The rendered Head of Media component.
 */
const HeadOfMediaComponent = ({ posts }) => {
    return (
        <>
            <PendingApprovalComponent posts={
                posts.filter(post => post.requested_approval)
            } />
            <IncomingRequestsComponent posts={
                posts.filter(post => !post.approved)
            } />
        </>
    );
};

export default HeadOfMediaComponent;