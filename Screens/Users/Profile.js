import React from "react";
import { View,StyleSheet,Image,Dimensions,Text} from "react-native";
const {width, height} = Dimensions.get('window');
import RoundButton from "../Common/Button/RoundButton";
import Avatar from "../Common/Avatar";
import LevelButton from "../Common/Button/LevelButton";

const Profile =()=>{
  return(
    <View style ={Style.mainContainer}>
      <View style={{alignItems: 'center',}}>
      <View style = {{flexDirection: 'row',alignItems: 'center',justifyContent:'center'}}>
        <Text style={Style.points}>47</Text>
        <Text style={Style.textView}>positivity points</Text>
      </View>
      <LevelButton levelNumber={'7'} notificationNumber={'5'}/>
      </View>
    <View style={Style.container}>
     <RoundButton buttonId={'Followers'}/>
     <View>
     <Avatar style={Style.profileView} url={require("../../Assets/avatars/default_(16).png")}/>
     </View>
     <RoundButton buttonId={'Following'}/>
    </View>
    </View>
  );
}
export default Profile ;

const Style = StyleSheet.create({
  mainContainer:{
    flex: 1,
    marginTop: 20
  },
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  profileView: {
    width: 140,
    height: 140,
  },
  textView: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600'
  },
  points: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#10C7FF',
    marginRight: 10
  }
})