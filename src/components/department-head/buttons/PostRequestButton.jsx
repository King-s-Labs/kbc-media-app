import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { COLOURS } from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Button to make a post request.
 */
const PostRequestButton = ({ onPress, iconType, buttonText }) => (
    <Button mode="contained-tonal"
        style={styles.buttonStyle}
        labelStyle={styles.labelStyle}
        onPress={onPress}
        testID="post-request-button">
        <View style={styles.buttonContentStyle}>
            <Icon name={iconType}
                size={20}
                color={COLOURS.SECONDARY_COLOUR} />
            <Text>{buttonText}</Text>
        </View>
    </Button>
);

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: COLOURS.SECONDARY_COLOUR,
        borderRadius: 5,
        marginHorizontal: 20,
        marginTop: 10,
    },

    labelStyle: {
        fontSize: 17,
        color: COLOURS.SECONDARY_COLOUR,
    },

    buttonContentStyle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    }

});

export default PostRequestButton;