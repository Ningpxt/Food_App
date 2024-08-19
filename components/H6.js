import React from 'react';
import { Image, Text, View } from 'react-native';

export default function H6() {
    return (

        <View style={{ flexDirection: "row" }}>



            <View style={{}}>
                <Text style={{ fontSize: 25, marginLeft: 15, paddingTop: 20 }}>ร้านที่คุณอาจจะชอบ</Text>

                <Image style={{ height: 150, width: 200, borderRadius: 5, marginLeft: 15, marginRight: 15, marginTop: 15 }} source={require("../assets/f5.jpg")} />
                <Text style={{ fontSize: 20, marginLeft: 15, paddingTop: 10 }}>แฮมเบอร์เกอร์</Text>
                <Text style={{ fontSize: 15, marginLeft: 15, paddingTop: 5, color: 'gray' }}>โฆษณา 10.3km</Text>
            </View>
            <View style={{}}>
                <Text style={{ fontSize: 25, marginLeft: 15, paddingTop: 20 }}></Text>

                <Image style={{ height: 150, width: 200, borderRadius: 5,paddingTop: 20, marginLeft: 15, marginRight: 15, marginTop: 15 }} source={require("../assets/f5.jpg")} />
                <Text style={{ fontSize: 20, marginLeft: 15, paddingTop: 10 }}>แฮมเบอร์เกอร์</Text>
                <Text style={{ fontSize: 15, marginLeft: 15, paddingTop: 5, color: 'gray' }}>โฆษณา 10.3km</Text>
            </View>
            <View style={{}}>
                <Text style={{ fontSize: 25, marginLeft: 15, paddingTop: 20 }}></Text>

                <Image style={{ height: 150, width: 200, borderRadius: 5,paddingTop: 20, marginLeft: 15, marginRight: 15, marginTop: 15 }} source={require("../assets/f5.jpg")} />
                <Text style={{ fontSize: 20, marginLeft: 15, paddingTop: 10 }}>แฮมเบอร์เกอร์</Text>
                <Text style={{ fontSize: 15, marginLeft: 15, paddingTop: 5, color: 'gray' }}>โฆษณา 10.3km</Text>
            </View>
            <View style={{}}>
                <Text style={{ fontSize: 25, marginLeft: 15, paddingTop: 20 }}></Text>

                <Image style={{ height: 150, width: 200, borderRadius: 5,paddingTop: 20, marginLeft: 15, marginRight: 15, marginTop: 15 }} source={require("../assets/f5.jpg")} />
                <Text style={{ fontSize: 20, marginLeft: 15, paddingTop: 10 }}>แฮมเบอร์เกอร์</Text>
                <Text style={{ fontSize: 15, marginLeft: 15, paddingTop: 5, color: 'gray' }}>โฆษณา 10.3km</Text>
            </View>

        </View>
    );
}