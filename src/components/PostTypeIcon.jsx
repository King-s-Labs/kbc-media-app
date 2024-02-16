import Icon from 'react-native-vector-icons/FontAwesome';


export default function PostTypeIcon({ post_type }) {
    if (!post_type) {
        return null
    }

    return (
        <Icon name={post_type}
            size={50}
            color="black" />
    );
};