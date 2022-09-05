import React from "react";
import {View,StyleSheet,Image,TouchableOpacity} from "react-native";
import Frame from "../Common/Frame";

const User =()=>{
    return(
        <Frame
         rightComponent={
          <TouchableOpacity>
           <Image style={Style.ImageView} source={require("../../Assets/Buttons/AddUserIcon.png")}/>
          </TouchableOpacity>
         }>
        </Frame>
    );
}

export default User;

const Style =StyleSheet.create({
    ImageView: {
        height: 30,
        width: 30,
      },
})
