import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Creates an icon for a post type.
 * 
 * @param {*} post_type The type of the post 
 * @returns An icon with the logo representing the post type
 */
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