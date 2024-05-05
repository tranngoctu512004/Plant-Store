import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputText = ({ placeholder, value, changText, secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={changText}
            placeholderTextColor='#8B8B8B'
            secureTextEntry={secureTextEntry}
            style={[
                styles.input,
                isFocused && styles.inputFocused
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    )
}

export default InputText

const styles = StyleSheet.create({
    input: {
        borderWidth: 1.5,
        borderColor: '#8B8B8B',
        borderRadius: 10,
        padding: 12,
        marginTop: 20,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Poppins',
    },
    inputFocused: {
        borderColor: 'green', // Màu viền xanh khi nhận được sự chú ý
    }
})
