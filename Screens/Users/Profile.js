import React from "react";
import { View,StyleSheet,Image,Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');
import RoundButton from "../Common/Button/RoundButton";
import Avatar from "../Common/Avatar";
import { ringColor,levelUpAnimation } from "../../Utils";

const Profile =()=>{
  return(
    <View style={Style.container}>
     <RoundButton buttonId={'Followers'}/>
     
     <RoundButton buttonId={'Following'}/>
    </View>
  );
}
export default Profile ;

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'stretch'
  }
})