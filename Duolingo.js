import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import PowerUpList from './PowerUpList'

const Duolingo = () => (
<ScrollView style={styles.duolingo} showsVerticalScrollIndicator={false}>
<Text style={styles.duolingo_title}>{item.duolingo_title}</Text>
<Text style={styles.about_lesson}>{item.about_lesson}</Text>
<Image
    style={styles.duolingo_pic}
    source={{uri: item.duolingo_pic}}
    />
<Text style={styles.power_ups}>{item.power_ups}</Text>
<PowerUpList item={item.power_up_list}/>
</ScrollView>
)

export default Duolingo;

const styles = StyleSheet.create({
    'duolingo_title': {
        'color': '#0b0909',
        'fontSize': 25,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_lesson': {
        'fontSize': 14,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'duolingo_pic': {
        'width': '20vw',
        'height': '40vw',
        'marginTop': 5
    },
    'power_ups': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});