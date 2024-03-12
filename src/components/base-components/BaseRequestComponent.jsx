import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

/**
 * Renders a base request component with customisable card type and title.
 * 
 * @param {object[]} posts - An array of post objects to render in the component.
 * @param {React.ComponentType} Card - The type of card component to use for rendering each post.
 * @param {string} title - The title to display above the list of posts.
 * @returns {JSX.Element} The rendered base request component.
 */

const BaseRequestComponent = ({ posts, Card, title }) => {
    return (
        <View>
            <Text style={styles.textStyle} variant="titleLarge">{title} ({posts.length})</Text>
            <View style={styles.container}>
                {posts.map((post, index) => (
                    <Card key={index} post={post} />
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 30,
        margin: 20,
    },

})

export default BaseRequestComponent;