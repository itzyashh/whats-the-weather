import { StyleSheet } from "react-native";
import { textScale } from "../../../assets/styles/scaling";

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
        fontSize: 20,
        display:'none',
    },
    temperatureContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline'
    },
    temperature:{
        fontSize: textScale(150)
    },
    icon:{
        fontSize: 80,
        color:'#fff'
    }
})