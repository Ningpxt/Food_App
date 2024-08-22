import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";


export default function H7Flatlist(props) {
    const tours = [
        { "id": "1", "title": "KFC", 
          "uri": "https://images.deliveryhero.io/image/fd-th/LH/v3zl-hero.jpg?width=512&height=384&quality=45",
          "description":"โฆษณา 10.3km"
        },
        { "id": "2", "title": "Chestr's", 
            "uri": "https://images.deliveryhero.io/image/fd-th/Products/149061081.jpg?width=%s" ,
        "description":"โฆษณา 10.3km"
    },
       
            { "id": "3", "title": "Pizza", 
                "uri": "https://www.tasteofhome.com/wp-content/uploads/2019/12/The-Best-Sausage-Pizzas_EXPS_PPMBZ24_245369_DR_11_07_12b.jpg?fit=700,700" ,
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
