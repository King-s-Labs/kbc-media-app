import PendingApprovalComponent from "../PendingApprovalComponent";
import IncomingRequestsComponent from "./IncomingRequestsComponent";


const HeadOfMediaComponent = ({ posts }) => {
    return (
        <>
            <PendingApprovalComponent posts={
                posts.filter(post => post.needs_approval)
            } />
            <IncomingRequestsComponent posts={
                posts.filter(post => !post.approved)
            } />
        </>
    );
};

export default HeadOfMediaComponent;