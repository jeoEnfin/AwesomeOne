import React from "react";
import { View,StyleSheet,Image,Text} from "react-native";

const Info =()=>{
    return(
        <View style={Style.container}>
            <View>
                <View style={Style.coinContainer}>
                <Image style={Style.coin} source={require("../../Assets/Animations/Kindness-coin.gif")}/> 
                </View>
            <Image source={require("../../Assets/CustomScreen/InfoSheet.png")}/>
            </View>
            <View>
            <View style={Style.cupContainer}>
                <Image style={Style.cup} source={require("../../Assets/Animations/Challenge-cup.gif")}/> 
                </View>
            <Image source={require("../../Assets/CustomScreen/InfoSheet.png")}/>
            </View>
        </View>
    );
}
export default Info;

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    coinContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -30,
        marginLeft:5          
    },
    coin: {
        height: 56,
        width: 56
    },
    cupContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -36,
        marginLeft:5
    },
    cup: {
        height: 68,
        width: 68
    }
})