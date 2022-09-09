import React from "react";
import { View,StyleSheet,Image,Text} from "react-native";
import SummarySheet from "../Common/SummurySheet";

const Summary =()=>{
    return(
       <View style={Style.container}>
        <SummarySheet url={require('../../Assets/Animations/Kindness-coin.gif')}/>
        <SummarySheet url={require('../../Assets/Animations/Challenge-cup.gif')}/>
       </View>
    );
}
export default Summary;

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    }
})