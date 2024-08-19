import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function N3() {
    return (
        <View style={{ marginTop: 20, marginLeft: 25, padding: 10, marginRight: 25,flexDirection:'row' }}>
            <View style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 10, backgroundColor: "white",flexDirection:'row' ,width:110,height:50}}>
                <Image style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }} source={require("../assets/plus.png")} />
                <Text style={{ fontSize:15,padding: 10, color: 'black' }}>เติมเงิน </Text>
            </View>
            <View style={{ marginLeft:20, borderWidth: 1, borderColor: 'grey', borderRadius: 10, backgroundColor: "white",flexDirection:'row' ,width:110,height:50}}>
                <Image style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }} source={require("../assets/plus.png")} />
                <Text style={{ fontSize:15,padding: 10, color: 'black' }}>โอนเงิน </Text>
            </View>





        </View>
        // </View>
    );
}