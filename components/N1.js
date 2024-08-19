import React from 'react';
import { Image, Text, View } from 'react-native';
export default function N1() {
    return (
        <View style={{ height:170, padding: 20,fontSize:25,backgroundColor:'white'}}>
        <View style={{flexDirection : 'row' }}>
           
            <Text style={{ fontSize: 25,marginLeft:25,color:'black'}}>การชำระเงิน</Text>
            {/* <Text style={{ fontSize: 15}}>สร้างบัญชีครอบครัว</Text> */}
            <Image style={{ width: 40, height: 40, borderRadius: 150/2,marginLeft:230 }} source={{ uri : 'https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-cogs-gear-setting-wheel-flat-color-icon-vector-icon-png-image_1648553.jpg' }} />
            </View>
<Text style={{marginLeft:25}}>ชำระเงินอย่างง่ายดายและยืดหยุ่น</Text>
            </View>
            
 );
}
