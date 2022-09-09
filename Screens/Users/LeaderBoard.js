import React from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';



const LeaderBoard =()=>{
    return(
      <View style={Style.container}>
        <TouchableOpacity>
        <View style={Style.animationContainer}>
    <Image style={Style.animation} resizeMode='contain' source={require("../../Assets/leaderboard.png")}/>
       <View style={Style.animation}></View>
      </View>
        </TouchableOpacity>
      </View>
    );
}
export default LeaderBoard;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    animation: {
        position: 'relative'    
    },
    animationContainer: {
      
    }
})