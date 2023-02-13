import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const powerUpListItem = ({ item }) => (
<View style={styles.power_up_list_item}>
<Image
    style={styles.power_up_icon}
    source={{uri: item.power_up_icon}}
   />
<Text style={styles.power_up_title}>{item.power_up_title}</Text>
<Text style={styles.about_power_up}>{item.about_power_up}</Text>
<Image
    style={styles.gem_icon}
    source={{uri: item.gem_icon}}
   />
<Text style={styles.power_count}>{item.power_count}</Text>
</View>
  );

const PowerUpList = ({ item }) => (
<FlatList
    style={styles.power_up_list}
    data={item}
    renderItem={powerUpListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default PowerUpList;

const styles = StyleSheet.create({
    'power_up_icon': {
        'width': '18vw',
        'height': '18vw',
        'margin': 5
    },
    'power_up_title': {
        'fontSize': 16,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_power_up': {
        'fontSize': 14,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'marginTop': 10
    },
    'gem_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'power_count': {
        'color': '#3b9de8',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});