import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";


export default function H7Flatlist(props) {
    const tours = [
        { "id": "1", "title": "แฮมเบอร์เกอร์", 
          "uri": "https://t3.ftcdn.net/jpg/06/96/39/60/360_F_696396088_L77HhKwi64dmsLXacVz1djEK2Re1Ieyu.jpg",
          "description":"โฆษณา 10.3km"
        },
        { "id": "2", "title": "หมูกระทะ", 
            "uri": "https://shopee.co.th/blog/wp-content/uploads/2020/04/Shopee-Blog-%E0%B8%9B%E0%B8%B4%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B0.jpg" ,
        "description":"โฆษณา 10.3km"
    },
       
            { "id": "3", "title": "บิงซู", 
                "uri": "https://assets.epicurious.com/photos/64b06ce15265536910e94586/16:9/w_6397,h_3598,c_limit/Bingsu_HERO_071223_56686.jpg" ,
            "description":"โฆษณา 10.3km"
        },

    ];
    
    

    return (
        <View style={{margin:10}}>
            <Text style={{ fontSize: 25,marginBottom:20 }}>สั่งมื้อเที่ยงจาก</Text>
    
            <FlatList
                horizontal={true}
                data={tours}
                // data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10,paddingRight:10 }}>
                                <Image style={{ width : 230, height: 170, borderRadius: 10 }} source={{ uri: item.uri}} />
                                <View style={{ paddingTop:10, height: 80, width: 200, paddingHorizontal: 10, borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }}>
                                    <Text style={{ fontSize: 18, color: "black" }}>{ item.title }</Text>
                                    <Text style={{ fontSize: 16, color: "grey" }}>{ item.description }</Text>
                                </View>
                            </View>
                            
                            // <TourItem item={item} index={index} />
                        );
                    }
                }
                keyExtractor={item => item.id}
            />


        </View>
    );
}
