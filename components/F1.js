import React from 'react';
import { Image, Text, View } from 'react-native';
export default function F1() {
    return (
        <View style={{  padding: 20,fontSize:25 ,flexDirection : 'row' ,backgroundColor:'#1B4D3E'}}>
           
            <Text style={{ fontSize: 25,marginLeft:25,color:'white'}}>Ning</Text>
            {/* <Text style={{ fontSize: 15}}>สร้างบัญชีครอบครัว</Text> */}
            <Image style={{ width: 80, height: 80, borderRadius: 150/2,marginLeft:250 }} source={{ uri : 'https://i.pinimg.com/736x/5f/3b/06/5f3b06d0465634783eebe8ad6a3dce9c.jpg' }} />

            </View>
 );
}
