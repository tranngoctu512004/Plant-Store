import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemTopBar = ({ name }) => {
    return (
        <View style={
            styles.containerItembar
            
            }>
            <Text style={styles.textAll}>{name}</Text>
        </View>
    )
}

export default ItemTopBar

const styles = StyleSheet.create({
    textAll: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        color: '#7D7B7B',
        fontWeight: '400',
        lineHeight: 20,
        marginLeft:8,

    },
    containerItembar: {
        flexDirection: 'row',
    }
})