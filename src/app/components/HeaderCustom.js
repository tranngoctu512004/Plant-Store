import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { memo } from 'react';

const HeaderCustom = ({ leftIcon, title, rightIcon, onPress, onRightIconPress }) => {
    return (
        <View style={styles.container}>
            {leftIcon !== undefined &&
                <TouchableOpacity onPress={onPress}>
                    <Image source={leftIcon} style={styles.sizeIcon} />
                </TouchableOpacity>


            }
            {!!title && <Text style={styles.title}>{title}</Text>}
            {rightIcon !== undefined &&
                <TouchableOpacity onPress={onRightIconPress}>
                    <Image source={rightIcon} style={styles.sizeIcon} />
                </TouchableOpacity>
            }
        </View>
    );
};
export default memo(HeaderCustom)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        height: 55,
        marginTop: 44,
    },
    sizeIcon: {
        width: 24,
        height: 24,
    },
    title: {
        textAlign: 'center',
        color: '#221F1F',
        fontSize: 16,
        fontFamily: 'Lato',
        flex: 1,
        lineHeight: 22,
        fontWeight: '500',
    }
})