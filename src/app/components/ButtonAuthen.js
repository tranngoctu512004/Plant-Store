import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonAuthen = ({ content, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.textRegister}>{content}</Text>
        </TouchableOpacity>
    )
}

export default ButtonAuthen

const styles = StyleSheet.create({
    textRegister: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: '700',

    },
    buttonContainer: {
        height: 50,
        borderRadius: 15,
        backgroundColor: '#007537',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 24,
    },
})