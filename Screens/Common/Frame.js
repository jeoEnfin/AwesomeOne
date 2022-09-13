
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, TouchableOpacity, Text, KeyboardAvoidingView, Image ,ScrollView} from 'react-native';
import Background from './Background';

const Frame = ({ children, rightComponent = null,title = null,subTitle = null,listIconPress}) => {

  return (
    <Background>
    <ScrollView showsVerticalScrollIndicator={false}> 
      <View style={Style.frame}>
        <TouchableOpacity style={Style.back}>
          <Image style={Style.imageView} source={require("../../Assets/Buttons/BackArrow.png")} />
        </TouchableOpacity>
        <View style={Style.userView}>
          <Text style={Style.userNameView}>{title}</Text>
          <Text style={Style.genderView}>{subTitle}</Text>
        </View>
        <View style={Style.component}>
          <View style={Style.rightComponent}>{rightComponent}</View>
          <View>
            <TouchableOpacity style={Style.List} onPress={listIconPress}>
              <Image style={Style.imageView2} source={require("../../Assets/Buttons/ListIcon.png")} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
      
      <View style={Style.children}>{children}</View>
      
     
      
    </ScrollView>
    </Background>
  );
};

const Style = StyleSheet.create({
  frame: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "stretch",
    flexDirection: 'row',
    marginTop: 20,
  },
  back: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  List: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  children: {
    paddingHorizontal: 15,
    paddingBottom: 0,
    position: 'relative',
  },
  imageView: {
    height: 18.5,
    width: 13.5
  },
  imageView2: {
    height: 19,
    width: 19
  },
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  rightComponent: {
    marginRight: 20,
    height: 25,
    width: 25
  },
  userNameView: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },
  genderView: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5
  },
  userView: {
   marginTop: -10,
   alignItems: 'center',
   marginLeft: 40
  }
});

export default Frame;
