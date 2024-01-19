import { StyleSheet } from "react-native";

const BACK_BUTTON_SIZE = 20
export const s = StyleSheet.create({
    container: {
         flexDirection: 'row',
         paddingHorizontal: 20,

    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        marginRight:BACK_BUTTON_SIZE
    },
    backButton: {
        width: BACK_BUTTON_SIZE,
    },
    forecast: {
        fontSize: 20,

    }
})