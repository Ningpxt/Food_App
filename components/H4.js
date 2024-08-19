import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function H4() {
    return (
        <View style={{ flexDirection: "row"}}>
            <View style={{ width:200, marginLeft: 30, padding: 10, borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 10 ,backgroundColor : "#C0C0C0"}}>

                <Text style={{ fontSize: 15 }}>ยอดคงเหลือ</Text>
               
                <Text >$ 0 </Text>
                {/* <Image style={{ height:20,width:20}} source={require("../assets/search.png")} /> */}
                
                
            

            </View>
            <View style={{  width:200, marginLeft: 20, padding: 10, borderWidth: 1, borderColor: '#C0C0C0', borderRadius: 10 ,backgroundColor : "#C0C0C0"}}>

                <Text style={{ fontSize: 15 }}>Rewards</Text>
                
                <Text > 0 </Text>
            

            </View>
        </View>
    );
}