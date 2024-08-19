import React from 'react';
import { ScrollView,  View } from 'react-native';
import Food1 from '../components/F1';
import F1 from '../components/F1';
import F2 from '../components/F2';
import F3 from '../components/F3';
export default function Food2() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
            < F1/>  
            <F2/>
            <F3/>
            </View>
        </ScrollView>
    );
}