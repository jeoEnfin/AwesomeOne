import React from "react";
import { View, StyleSheet, Image, Text,TouchableOpacity } from "react-native";

const SummarySheet = ({ url }) => {
    return (
        <View style={Style.container}>
            <View>
                <TouchableOpacity>
                <View style={Style.animationContainer}>
                    <Image style={Style.animation} source={url} />
                </View>
                <View style={Style.imageView} >
                <Image  source={require("../../Assets/CustomScreen/InfoSheet.png")}/>   
                </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default SummarySheet;

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        
    },
    animationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -30,
        marginLeft: 5,
    },
    animation: {
        height: 56,
        width: 56,
    },
    imageView: {
        position: 'relative'
    }
})