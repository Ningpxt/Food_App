import React from 'react';
import { ScrollView,  View } from 'react-native';
import Food1 from '../components/F1';
import F1 from '../components/F1';
import F2 from '../components/F2';
import F3 from '../components/F3';
import N1 from '../components/N1';
import N2 from '../components/N2';
import N3 from '../components/N3';
import N4Flatlist from '../components/N4Flatlist';
import N5 from '../components/N5';
export default function Food3() {
    return (
        <ScrollView style={{backgroundColor:'#e6ffeb'}}>
            <View style={{ flex: 1, paddingTop: 20 }}>
            < N1/>  
           <N2/>
           <N3/>
           <N4Flatlist/>
           <N5/>
            </View>
        </ScrollView>
    );
}