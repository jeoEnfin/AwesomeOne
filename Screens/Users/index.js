import React from "react";
import {View,StyleSheet,Image,TouchableOpacity,FlatList} from "react-native";
import Frame from "../Common/Frame";
import Profile from "./Profile";
import Summary from "./Summary";

const User =()=>{

    const items = [
        <Profile />,
        <Summary />
    ];

    return(
        <Frame
         rightComponent={
          <TouchableOpacity>
           <Image style={Style.ImageView} source={require("../../Assets/Buttons/AddUserIcon.png")}/>
          </TouchableOpacity>
         }>
             <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: -15}}
        data={items}
        renderItem={({item}) => item}
        keyExtractor={(_, index) => index.toString()}
      />
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
