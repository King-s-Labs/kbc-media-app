import { StyleSheet } from "react-native";

/**
 * Styles for request cards.
 */
export default StyleSheet.create({

    outerContent: {
        padding: 30,
    },

    content: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textContainer: {
        flex: 1,
    },

    titleStyle: {
        fontWeight: "bold",
    },

    italicText: {
        fontStyle: "italic",
    },

    mutedText: {
        color: "gray",
    },

    iconStyle: {
        backgroundColor: "transparent",
        fontSize: 40,
        margin: 30,
    },
})