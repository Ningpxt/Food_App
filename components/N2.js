import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function N2() {
    return (
        <View style={{  marginTop: -30, marginLeft: 25, padding: 10, marginRight: 25, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: "#5c8a76" }}>

            <Text style={{ padding: 10, color: 'white' }}>เปิดใช้งาน </Text>
            <Text style={{ fontSize:20,marginLeft:10, color: 'white' }}>GrabPay Wallet </Text>
            <Image style={{ height:30,width:30,marginLeft:350,marginTop:10}} source={require("../assets/plus.png")} />
            {/* <Text >small room to large suites</Text> */}

        </View>
        // </View>
    );
}