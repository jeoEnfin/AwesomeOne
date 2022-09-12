import React, { Children } from "react";
import { View, Image, StyleSheet, KeyboardAvoidingView } from "react-native";

const Background = ({children}) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, position: 'relative', backgroundColor: 'white' }}>
            <Image style={Style.BgView} source={require("../../Assets/Animations/Background/Background.gif")} />
            <View style={Style.children}>{children}</View>
        </KeyboardAvoidingView>
    );
}
export default Background;

const Style = StyleSheet.create({
    BgView: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    children: {
        paddingHorizontal: 15,
        paddingBottom: 0,
        position: 'relative',
      },
})