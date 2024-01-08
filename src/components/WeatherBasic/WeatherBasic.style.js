import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    clock:{
        alignItems:'flex-end'
    },
    city:{},
    interpretation:{
        alignSelf:'flex-end',
        transform: [{ rotate: '-90deg'}]
    },
    interpretationText:{
        fontSize: 20
    },
    temperatureContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline'
    },
    temperature:{
        fontSize: 150
    },
    image:{
        width: 50,
        height: 50,
        backgroundColor:'red'
    }
})