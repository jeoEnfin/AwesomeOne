import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';

import LeaderBoardSheet from "../Common/LeaderBoardSheet";

const LeaderBoard = () => {
  return (
    <View style={Style.container}>
     <LeaderBoardSheet />
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
})