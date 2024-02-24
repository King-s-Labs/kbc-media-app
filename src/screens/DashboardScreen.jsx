import { View } from 'react-native';
import AppBar from '../components/AppBar';
import ScrollableScreen from '../components/ScrollableScreen';
import DepartmentHeadComponent from '../components/department-head/DepartmentHeadComponent';
import HeadOfMediaComponent from '../components/head-of-media/HeadOfMediaComponent';
import MediaAssociateComponent from '../components/media-associate/MediaAssociateComponent';


const posts = [
    {
        "name": "Consulting Week Ad",
        "department": "Consulting",
        "post_time": new Date('2024-02-15T17:30:00'),
        "time_sent_at": new Date("2024-02-11T17:30:00"),
        "due_date": new Date("2024-03-31T17:30:00"),
        "approved": false,
        "needs_approval": true,
        "assigned_to": "Associate1",
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
        "approved": false,
        "needs_approval": false,
        "assigned_to": null,
        "post_type": "linkedin"
    },
]

const isDepartmentHead = false;
const department = "talent";

const isHeadOfMedia = false;

const associateName = "associate1"

/**
 * Dashboard screen for the app.
 */
export default function DashboardScreen() {
    return (
        <ScrollableScreen>
            <View>
                <AppBar title="Dashboard" />
                {isDepartmentHead ?
                    <DepartmentHeadComponent posts={
                        posts.filter(post => post.department.toLowerCase() === department)
                    } />
                    : isHeadOfMedia ?
                        <HeadOfMediaComponent posts={posts} />
                        : <MediaAssociateComponent posts={
                            posts.filter(post => post.assigned_to && post.assigned_to.toLowerCase() === associateName)
                        } />
                }
            </View>
        </ScrollableScreen>
    );
}
