import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    day: {
        fontSize: 20,
        minWidth: 50,
        textAlign: 'left',
    },
    date: {
        fontSize: 20,
    },
    temp: {
        minWidth: 70,
        textAlign: 'right',
    }
})