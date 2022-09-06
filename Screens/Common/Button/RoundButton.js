import React from "react";
import { View,StyleSheet,Image,TouchableOpacity,Text} from "react-native";

const RoundButton =({buttonId})=>{
  return(
    <View style={Style.container}>
      <TouchableOpacity  style={Style.buttonContainer}>
        <Text style={Style.textView}>10</Text>
      </TouchableOpacity>
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
        backgroundColor: 'blue',
        height: 40,
        width: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
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