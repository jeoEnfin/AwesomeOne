import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, FlatList, Text } from "react-native";
import Frame from "../Common/Frame";
import Profile from "./Profile";
import Summary from "./Summary";
import LeaderBoard from "./LeaderBoard";
import Posts from "./Posts";

import { useNavigation } from "@react-navigation/native";
import DropDownList from "../Common/DropDownList";
import ListButton from "../Common/Button/ListButton";


const User = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);

    const modelShow = () => {
        setModalVisible(true)
        return modalVisible
    }
    const modelOff = () => {
        setModalVisible(false)
    }



    const items = [
        <Profile />,
        <Summary />,
        <LeaderBoard />,
        <Posts />,
    ];

    return (
        <Frame
            title={'Sample user'}
            subTitle={'Male'}
            rightComponent={
                <TouchableOpacity>
                    <Image style={Style.ImageView} source={require("../../Assets/Buttons/AddUserIcon.png")} />
                </TouchableOpacity>
            }
            listIconPress={modelShow}
        >
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: -15 }}
                data={items}
                renderItem={({ item }) => item}
                keyExtractor={(_, index) => index.toString()}
            />
            <DropDownList
                modalShown={modalVisible}
                RightComponent={
                    <View>
                        <View>
                            <ListButton title={'Virtual Store'} />
                            <ListButton title={'Edit profile'} />
                            <ListButton title={'Account settings'} />
                            <ListButton title={'Terms of service'} />
                            <ListButton title={'Privacy policy'} />
                            <ListButton title={'Customer support'} />
                        </View>
                        <View style={Style.listBottomView}>
                            <View>
                                <TouchableOpacity onPress={modelOff}>
                                    <Image source={require('../../Assets/Buttons/Vector3.png')} />
                                </TouchableOpacity>

                            </View>
                            <View>
                                <Image source={require('../../Assets/Buttons/Group 5.png')} resizeMode='contain' />
                            </View>
                        </View>
                    </View>
                } />
        </Frame>
    );
}

export default User;

const Style = StyleSheet.create({
    ImageView: {
        height: 25,
        width: 25,
    },
    listBottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listBottomText: {
        color: '#fff',
        fontSize: '15'
    }
})
