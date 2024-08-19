import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function F2() {
    return (
        <View style={{ flexDirection: "row", marginTop: -10, marginLeft: 25, padding: 10, marginRight: 25, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: "#fcf0e2" }}>


            <Image style={{ height: 40, width: 45 }} source={require("../assets/infinity.png")} />
            <Text style={{ padding: 10, color: 'black' }}>สมัคร FoodUnlimited </Text>
            <Image style={{ height:20,width:20,marginLeft:180,marginTop:10}} source={require("../assets/arrow.png")} />
            {/* <Text >small room to large suites</Text> */}

        </View>
        // </View>
    );
}