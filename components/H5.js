import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function H5() {
    return (

        <View style={{ flexDirection: "row" }}>



            <View style={{}}>
                <Text style={{ fontSize: 25, marginLeft: 15, paddingTop: 10 }}>สั่งเลย</Text>
                <Image style={{ height: 250, width: 450, borderRadius: 5, marginLeft: 15, marginRight: 15, marginTop: 15 }} source={require("../assets/f2.jpg")} />
            
            <Text style={{ fontSize: 20, marginLeft: 15, paddingTop: 10 }}>รวมอาหารอร่อย ลดทันที่100.-</Text>
            <Text style={{ fontSize: 15, marginLeft: 15, paddingTop: 5, color: 'gray' }}>โฆษณา</Text>
            </View>
            <View style={{}}>
                <Text style={{ fontSize: 25, marginLeft: 15, paddingTop: 10 }}>สั่งเลย</Text>
                <Image style={{ height: 250, width: 450, borderRadius: 5, marginLeft: 15, marginRight: 15, marginTop: 15 }} source={require("../assets/f2.jpg")} />
            </View>
            <Text style={{ fontSize: 20, marginLeft: 15, paddingTop: 10 }}>รวมอาหารอร่อย ลดทันที่100.-</Text>
            <Text style={{ fontSize: 15, marginLeft: 15, paddingTop: 5, color: 'gray' }}>โฆษณา</Text>

        </View>

    );
}

