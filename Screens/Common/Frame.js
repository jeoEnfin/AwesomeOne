
import React from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity, Text, KeyboardAvoidingView,Image} from 'react-native';


const Frame = ({ children, rightComponent = null}) => {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1, position: 'relative', backgroundColor: 'white'}}>
      <Image style={Style.BgView} source={require("../../Assets/Animations/Background/Background.gif")}/>
      <View style={Style.frame}>
        <TouchableOpacity  style={Style.back}>
         <Image style={Style.ImageView} source={require("../../Assets/Buttons/BackArrow.png")}/>
        </TouchableOpacity>
        <View>{rightComponent}</View>
        <View>
        <TouchableOpacity  style={Style.List}>
        <Image style={Style.ImageView} source={require("../../Assets/Buttons/ListIcon.png")}/>
        </TouchableOpacity>
        </View>
      </View>
      <View style={Style.children}>{children}</View>
      
    </KeyboardAvoidingView>
  );
};

const Style = StyleSheet.create({
  frame: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "stretch",
    flexDirection: 'row',
    padding: 25,
    marginTop: 10
  },
  back: {
    borderRadius: 45 / 2,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  List: {
    borderRadius: 45 / 2,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  children: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 0,
    position: 'relative',
  },
  ImageView: {
    height: 25,
    width: 25
  },
  BgView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
}
 
});

export default Frame;
