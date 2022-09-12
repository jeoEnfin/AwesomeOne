import React from "react";
import { View,StyleSheet,Image,Text} from "react-native";
import SummarySheet from "../Common/SummurySheet";

const Summary =()=>{
    return(
       <View style={Style.container}>
        <SummarySheet 
        url={require('../../Assets/Animations/Kindness-coin.gif')}
        headNumber={'45'}
        head1={'Kindness Coins'}
        head2={'to Give Blessing'}
        head3={'to Others'}
        />
        <SummarySheet 
        url={require('../../Assets/Animations/Challenge-cup.gif')}
        headNumber={'5'}
        head1={'Challenges'}
        createdNumber={'2'}
        head2={'Created'}
        completedNumber={'4'}
        head3={'Completed'}
        />
       </View>
    );
}
export default Summary;

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    }
})