import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from "react-native";

const SummarySheet = ({ url, headNumber, head1, head2, head3,createdNumber,completedNumber }) => {
    return (
        <View style={Style.container}>
            <View>
                <TouchableOpacity>
                    <View style={Style.animationContainer}>
                        <Image style={Style.animation} source={url} />
                    </View>
                    <ImageBackground style={Style.imageView} source={require("../../Assets/CustomScreen/InfoSheet.png")}>
                        <View style={Style.imageText}>
                            <View style={Style.mainHeadView}>
                                <Text style={Style.headNumberView}>{headNumber}</Text>
                                <Text style={Style.mainHead}>{head1}</Text>
                            </View>
                            <View style={Style.subHeadView}>
                                <Text style={Style.subHeadNumberView}>{createdNumber}</Text>
                                <Text style={Style.subHead}>{head2}</Text>
                            </View>
                            <View style={Style.subHeadView}>
                                <Text style={Style.subHeadNumberView}>{completedNumber}</Text>
                                <Text style={Style.subHead}>{head3}</Text>
                            </View>
                        </View>
                    </ImageBackground>
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
        height: 165.8,
        width: 179.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageText: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainHeadView: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    mainHead: {
        fontSize: 15,
        color: '#fff'
    },
    subHead: {
        fontSize: 11,
        color: '#fff'
    },
    subHeadView: {
        flexDirection: 'row'
    },
    headNumberView: {
        color: '#10C7FF',
        marginRight: 5,
        fontSize: 15,
        shadowColor: '#000',
        shadowOpacity: 0.25,
    },
    subHeadNumberView: {
        fontSize: 11,
        marginRight: 5,
        color: '#fff'
    }
})