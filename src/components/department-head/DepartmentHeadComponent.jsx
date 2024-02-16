import CreatePostRequestButton from "./buttons/CreatePostRequestButton";
import CopyPostRequestButton from "./buttons/CopyPostRequestButton";
import PendingApprovalComponent from "../PendingApprovalComponent";
import RequestsInProgressComponent from "./RequestsInProgressComponent";


const DepartmentHeadComponent = ({ posts }) => {
    return (
        <>
            <CreatePostRequestButton />
            <CopyPostRequestButton />
            <PendingApprovalComponent props={
                posts.filter(post => post.needs_approval)
            } />
            <RequestsInProgressComponent props={
                posts.filter(post => !post.approved)
            } />
        </>
    );
};

export default DepartmentHeadComponent;