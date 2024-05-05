import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import HeaderCustom from '../../components/HeaderCustom'
const HistoryOrder = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />
            <HeaderCustom
                leftIcon={require('../../../../assets/arrowLeft.png')}
                title={'Lịch sử giao dịch'}

            />
            <View style={styles.content}>
                <Text style={styles.caption}>Thứ tư, 03/09/2021</Text>
                <View style={styles.line}></View>
                <Image style={styles.imgitem} source={require('../../../../assets/imgItem.png')} />
            </View>

        </View>
    )
}

export default HistoryOrder

const styles = StyleSheet.create({
    imgitem:{
        marginTop:10,
    },
    content: {
        paddingHorizontal: 48,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#ABABAB',
        marginTop: 5,
    },
    caption: {
        marginTop: 20,
        color: '#221F1F', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
    },
})