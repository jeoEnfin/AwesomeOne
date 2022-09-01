import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import AnimatedLottieView from "lottie-react-native";

const Splash = () => {
    return (

        <AnimatedLottieView
            source={require('../../Assets/Animations/Background/bganimation.json')}
            autoPlay
            loop
            resizeMode="contain"
        > 
            
        </AnimatedLottieView>

    );
}
export default Splash;

const Style = StyleSheet.create({
    container: {
        flex: 1

    },
    logo: {
        alignItems: 'center',

    }
})
