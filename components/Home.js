import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Home() {
    return (

<View style={{   }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row",}}>
            <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/f1.jpg")} />
                </View>
                </View>
                );
            }
