import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const LevelButton = ({levelNumber,notificationNumber}) => {
    return (
        <View >
            <LinearGradient  start={{x: 1.5, y: 0.5}} end={{x: 0.0, y: 0.2}} colors={['#FFFFFF', '#00F0FF', '#6100FF']} style={Style.level}>
            <Text style={Style.levelView}>LvL.{levelNumber}</Text>
            <Image source={require("../../../Assets/Buttons/Group.png")} />
            <Text style={Style.notificationView}>{notificationNumber}</Text>
            </LinearGradient>  
        </View>
    );
}
export default LevelButton;

const Style = StyleSheet.create({
    level: {
        flexDirection: 'row',
        width: 128,
        height: 50,
        marginTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    levelView: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginRight: 7
    },
    notificationView: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600'
    }
})