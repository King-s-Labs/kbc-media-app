import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { COLOURS } from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Button to copy a previously made post request. 
 */
const CopyPostRequestButton = () => (
    <Button mode="contained-tonal"
        style={styles.buttonStyle}
        labelStyle={styles.labelStyle}
        onPress={() => console.log('Pressed')}>
        <View style={styles.buttonContentStyle}>
            <Icon name="copy-outline"
                size={20}
                color={COLOURS.SECONDARY_COLOUR} 
                />
            <Text>Copy a previous post request</Text>
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

export default CopyPostRequestButton;