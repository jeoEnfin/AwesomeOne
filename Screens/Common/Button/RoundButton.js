import React from "react";
import { View,StyleSheet,Image,TouchableOpacity,Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";

const RoundButton =({buttonId})=>{
  return(
    <View style={Style.container}>
      <LinearGradient  start={{x: 1.5, y: 0.0}} end={{x: 0.0, y: 0.2}} colors={['#FFFFFF', '#00F0FF', '#6100FF']} style={Style.buttonContainer}>
      <TouchableOpacity  >
        <Text style={Style.textView}>10</Text>
      </TouchableOpacity>
      </LinearGradient>
      <Text style={Style.buttonIdView}>{buttonId}</Text>
    </View>
  );
}
export default RoundButton ;

const Style = StyleSheet.create({
    
    container: {
        alignItems: 'center',
        alignContent: 'center'
    },
    buttonContainer: {
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textView: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonIdView: {
        color: '#fff',
        fontSize: 11
    }
})