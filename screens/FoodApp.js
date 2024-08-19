import React from 'react';
import { ScrollView,  View } from 'react-native';
import Home from '../components/Home';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H4 from '../components/H4';
import H5 from '../components/H5';
import H6 from '../components/H6';
export default function FoodApp() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
            < Home/>  
            < H2/> 
            < H3/> 
            < H4/> 
            < H5/> 
            < H6/>
            </View>
        </ScrollView>
    );
}
