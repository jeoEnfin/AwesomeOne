import React from "react";
import { View ,StyleSheet,TouchableOpacity,Text,Image,ImageBackground} from "react-native";


const LeaderBoardSheet =({onPress})=>{
    return(
        <View>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground style={Style.imageBackgroundView} source={require('../../Assets/CustomScreen/leaderBoard.png')}>
                    <Image style={Style.mainHeadView} source={require("../../Assets/Animations/SplashScreen/Vector.png")}/>
                    <Text style={Style.subHeadView}>Current Top 20 Voted Family Friendly</Text>
                    <Text style={Style.subHeadView}>Videos in the World</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}
export default LeaderBoardSheet;

const Style=StyleSheet.create({
    imageBackgroundView: {
        height:140,
        width: 369,
        alignItems: 'center',
        justifyContent: 'center'
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
    }
})