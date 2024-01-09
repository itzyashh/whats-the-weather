import { StyleSheet, View } from "react-native";
import Txt from "../Txt/Txt";

export const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        backgroundColor: "#ffffff0b",
        flex: 1,
        alignItems: "center",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 15,
    },
});

export const StyledContainer = ({ children }) => (
    <View style={{alignItems:'center'}}>{children}</View>
);
export const StyledLabel = ({ children }) => (
    <Txt style={{ fontSize: 18, color: "#fff" }}>{children}</Txt>
);
export const StyledValue = ({ children }) => (
    <Txt style={{ fontSize: 20, color: "#fff" }}>{children}</Txt>
);
