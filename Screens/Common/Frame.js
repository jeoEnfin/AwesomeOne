
import React from 'react';
import { ScrollViewComponent, StyleSheet } from 'react-native';
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
    padding: 15,
    marginTop: 10,
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
    paddingHorizontal: 15,
    paddingBottom: 0,
    position: 'relative',
  },
  imageView: {
    height: 25,
    width: 17.5
  },
  imageView2: {
    height: 25,
    width: 25
  },
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  rightComponent: {
    marginRight: 20,
    marginTop: 4
  },
  userNameView: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff'
  },
  genderView: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5
  },
  userView: {
   alignContent: 'center',
   alignItems: 'center',
   marginLeft: 40
  }
});

export default Frame;
