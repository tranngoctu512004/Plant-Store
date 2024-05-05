import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderCustom from '../../components/HeaderCustom'

const EditInformation = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />
            <HeaderCustom

                leftIcon={require('../../../../assets/arrowLeft.png')}
                title={'Chỉnh sửa thông tin'}

            />
            <View style={styles.imageContainer}>
                <Image style={styles.imgAvt} source={require('../../../../assets/Avatar.png')} />
            </View>
            <View style={styles.containertextInfor}>
                <Text style={styles.textContent}>Thông tin sẽ được lưu cho lần mua kế tiếp.
                    Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
            </View>
            <View style={styles.content}>
                <Text>Trần Minh Trí</Text>
                <View style={styles.line}></View>
                <Text>tranminhtri@gmail.com</Text>
                <View style={styles.line}></View>
                <Text>60 Láng Hạ, Ba Đình, Hà Nộiio</Text>
                <View style={styles.line}></View>
                <Text>0123456789</Text>
                <View style={styles.line}></View>
            </View>
            <View style={styles.containerBotton}>
                <TouchableOpacity style={styles.buttonPayment}>
                    <Text style={styles.textButton}>Lưu thông tin</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditInformation

const styles = StyleSheet.create({
    containerBotton: {
        width: '100%',
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: 25,
    },
    textButton: {
        color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 20,
    },
    buttonPayment: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ABABAB',
        borderRadius: 8,
        marginTop: 10,

    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#ABABAB',
        marginTop: 5,
    },
    content: {
        paddingHorizontal: 48,
        gap: 15,
    },
    textContent: {
        width: 279,
        height: 40,
        color: '#221F1F', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
    },
    containertextInfor: {
        paddingHorizontal: 48,
        paddingVertical: 15,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        height: 140,
        justifyContent: "center",
        alignItems: 'center'
    },
    imgAvt: {
        paddingVertical: 30,
    }
})