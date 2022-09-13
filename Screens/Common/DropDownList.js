import { View, Text, Modal, StyleSheet, Button } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const DropDownList = ({ modalShown, RightComponent }) => {

  return (
    <View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalShown}>

        <View style={Style.centeredView}>
          <LinearGradient start={{ x: 1.5, y: 0.5 }} end={{ x: 0.0, y: 0.2 }} colors={['#FFFFFF', '#00F0FF', '#6100FF']} style={Style.modalView}>
            <View >{RightComponent}</View>
          </LinearGradient>
        </View>

      </Modal>
    </View>


  )
}

export default DropDownList;

const Style = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 5,
    opacity: 1.0

  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
  },
})