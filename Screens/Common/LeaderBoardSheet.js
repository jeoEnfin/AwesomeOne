import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const LeaderBoardSheet = ({ onPress }) => {
    return (
        <View style={Style.container}>
            <TouchableOpacity onPress={onPress} style={Style.button}>
               
                <View>
                    <LinearGradient start={{x: 1.5, y: 0.5}} end={{x: 0.0, y: 0.2}} colors={['#FFFFFF', '#00F0FF', '#6100FF']} style={Style.backgroundView}>
                    <Image source={require('../../Assets/Animations/leaderBoardAnime.gif')} style={Style.imageBackgroundView} />
                    <Image style={Style.mainHeadView} source={require("../../Assets/Animations/SplashScreen/Vector.png")} />
                    <Text style={Style.subHeadView}>Current Top 20 Voted Family Friendly</Text>
                    <Text style={Style.subHeadView}>Videos in the World</Text>
                    </LinearGradient>
                </View>
               
            </TouchableOpacity>
        </View>
    );
}
export default LeaderBoardSheet;

const Style = StyleSheet.create({
    backgroundView: {
        width: 340,
        height: 133,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 40,
    },
    mainHeadView: {
        height: 41,
        width: 154,
        marginBottom: 10
    },
    subHeadView: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackgroundView: {
        position: 'absolute',
        opacity:0.09,
        width: 420
    },
    button: {
        overflow: 'hidden',
        borderRadius: 40
    }
   
})