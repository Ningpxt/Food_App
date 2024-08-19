import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function H2() {
    return (
        <View style={{flexDirection: "row", marginTop: -25, marginLeft: 25, padding: 10, marginRight: 25, borderWidth: 1, borderColor: 'gray', borderRadius: 20 ,backgroundColor : "white"}}>
            {/* <View style={{ alignItems: 'center' }}> */}

                {/* <Text style={{ fontSize: 25 }}>Hilton San Francisco</Text> */}
                {/* <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View> */}
                
 <Image style={{ height:30,width:30}} source={require("../assets/search.png")} />
 <Text style={{padding:10,color:'gray'}}>สั่งอะไรดี ? </Text>
                {/* <Text >small room to large suites</Text> */}

            </View>
        // </View>
    );
}