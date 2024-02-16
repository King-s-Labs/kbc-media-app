import PendingApprovalComponent from "../PendingApprovalComponent";
import IncomingRequestsComponent from "./IncomingRequestsComponent";


const HeadOfMediaComponent = ({ posts }) => {
    return (
        <>
            <PendingApprovalComponent props={
                posts.filter(post => post.needs_approval)
            } />
            <IncomingRequestsComponent props={
                posts.filter(post => !post.approved)
            } />
        </>
    );
};

export default HeadOfMediaComponent;