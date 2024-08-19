import React from "react";
// import MyIcon from "../../screens/week03/Myicon";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function H3() {
  return (
    <View style={{  padding : 20 }}>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10   }}>
        <MyIcon title="อาหาร" name="wifi" size={30} color="#ABEBC6" />
        <MyIcon title="ของใช้" name="coffee" size={30} color="#ABEBC6" />
        
        <MyIcon title="เดินทาง" name="car" size={30} color="#ABEBC6" />
        <MyIcon title="ทั้งหมด" name="paw" size={30} color="#ABEBC6" />
      </View>
    </View>
  );
}
