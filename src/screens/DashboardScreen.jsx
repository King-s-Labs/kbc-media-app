import { View } from 'react-native';
import AppBar from '../components/AppBar';
import CreatePostRequestButton from '../components/buttons/CreatePostRequestButton';
import CopyPostRequestButton from '../components/buttons/CopyPostRequestButton';
import PendingApprovalComponent from '../components/PendingApprovalComponent';
import ScrollableScreen from '../components/ScrollableScreen';
import RequestsInProgressComponent from '../components/department-head/RequestsInProgressComponent';


const posts = [
    {
        "name": "Consulting Week Ad",
        "department": "Consulting",
        "post_time": new Date('2024-02-15T17:30:00'),
        "time_sent_at": new Date("2024-02-11T17:30:00"),
        "due_date": new Date("2024-03-31T17:30:00"),
        "approved": false,
        "needs_approval": true,
        "assigned_to": "Associate 1",
        "post_type": "instagram"
    },
    {
        "name": "Finance Week Recap",
        "department": "Finance",
        "post_time": new Date('2024-02-15T17:30:00'),
        "time_sent_at": new Date("2024-02-11T17:30:00"),
        "due_date": new Date("2024-03-15T17:30:00"),
        "approved": false,
        "needs_approval": true,
        "assigned_to": null,
        "post_type": "linkedin"
    },
    {
        "name": "Humans of KBC",
        "department": "Talent",
        "post_time": null,
        "time_sent_at": new Date("2024-02-16T17:30:00"),
        "due_date": new Date("2024-03-15T17:30:00"),
        "approved": false,
        "needs_approval": false,
        "assigned_to": null,
        "post_type": "instagram"
    },
    {
        "name": "Project Update",
        "department": "King's Strategy",
        "post_time": null,
        "time_sent_at": new Date("2024-02-14T17:30:00"),
        "due_date": new Date("2024-03-15T17:30:00"),
        "approval": false,
        "needs_approval": false,
        "assigned_to": null,
        "post_type": "linkedin"
    },
]

const isDepartmentHead = true;
const department = "talent";

export default function DashboardScreen() {
    return (
        <ScrollableScreen>
            <View>
                <AppBar title="Dashboard" />
                {isDepartmentHead ?
                    <>
                        <CreatePostRequestButton />
                        <CopyPostRequestButton />
                        <PendingApprovalComponent props={posts.filter(post => post.needs_approval)} />
                        <RequestsInProgressComponent props={posts.filter(post => post.department.toLowerCase() === department)} />
                    </>
                    : null}
            </View>
        </ScrollableScreen>
    );
}
