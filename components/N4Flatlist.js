import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";


export default function N4Flatlist(props) {
    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-DJevr9sWjXjyUJGTX1E0YZjS8HA021AdQ&s" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://www.siampay.com/images/truemoney_large_logo.jpg" },
        { "id": "3", "title": "Tour in Italy", "uri": "https://storage.googleapis.com/techsauce-prod/ugc/uploads/2023/6/1687323642_Grab_%E0%B8%9B%E0%B8%A5%E0%B8%94%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99_2566_.jpg" },
    ];
    
    

    return (
        <View style={{margin:10}}>
            <Text style={{ fontSize: 20,marginBottom:20 }}>แนะนำสำหรับคุณ</Text>
    
            <FlatList
                horizontal={true}
                data={tours}
                // data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width : 200, height: 200, borderRadius: 10 }} source={{ uri: item.uri}} />
                                
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
