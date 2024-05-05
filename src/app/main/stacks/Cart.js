import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, Modal, } from 'react-native'
import React, { useState } from 'react'
import HeaderCustom from '../../components/HeaderCustom'
const Cart = (props) => {
    const {navigation}=props;
    const [openModal, setOpenModal] = useState(false);
    const handleTrashIconPress = () => {
        setOpenModal(true);
    };
    const gotoPayment =() => {
        navigation.navigate('Payment')
    }
    function renderModal() {
        return (
            <Modal
                visible={openModal}
                animationType='slide'
                transparent={true}
            >
                <View
                    style={styles.modal}
                >
                    <View style={styles.content}>
                        <Text style={styles.textAccecp}>Xác nhận xóa tất cả đơn hàng?</Text>
                        <Text style={styles.textHa}>Thao tác này sẽ không thể khôi phục.</Text>
                        <TouchableOpacity style={styles.containerButton} onPress={() => setOpenModal(true)}>
                            <Text style={styles.buttonText}>Đồng ý</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOpenModal(false)}>
                            <Text style={styles.textCancel} >Hủy bỏ</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="rgba(255, 255, 255, 0)"
                translucent={true}
            />
            <HeaderCustom

                leftIcon={require('../../../../assets/arrowLeft.png')}
                title={'GIỎ HÀNG'}
                rightIcon={require('../../../../assets/trash.png')}
                onRightIconPress={handleTrashIconPress}
            />

            <Text style={styles.emty}>Giỏ hàng của bạn hiện đang trống</Text>
            <View style={styles.footer}>
                <View style={styles.headerFooter}>
                    <Text style={styles.textTamtinh}>Tạm tính</Text>
                    <Text style={styles.textPrice}>0đ</Text>
                </View>
                <TouchableOpacity style={styles.containerButton} onPress={gotoPayment}>
                    <Text style={styles.buttonText}>Tiến hành thanh toán</Text>
                    <Image style={styles.buttonImage} source={require('../../../../assets/chevron-right.png')} />
                </TouchableOpacity>
            </View>
            {openModal && <View style={styles.overlay} />}
            {renderModal()}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    textCancel: {
        marginTop: 12,
        textAlign: 'center', color: '#221F1F', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 20,
    },
    textHa: {
        marginTop: 8,
        textAlign: 'center', color: '#7D7B7B', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
    },
    textAccecp: {
        textAlign: 'center', color: '#252A31', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 20,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Màu đen với độ trong suốt 50%
    },
    modal: {

        width: '100%',
        height: 205,
        paddingHorizontal: 16,
        position: 'absolute',
        bottom: 10,

    },
    content: {

        borderRadius: 8,
        backgroundColor: '#fff',
        width: '100%',
        height: 205,
        padding: 24,
    },
    buttonText: {
        color: 'white', fontSize: 18, fontFamily: 'Lato', fontWeight: '500', lineHeight: 20,
    },
    containerButton: {
        backgroundColor: '#007537',
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    headerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textPrice: {
        width: 98, height: 20, textAlign: 'right', color: 'black', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
    },
    textTamtinh: {
        width: 83, height: 20, opacity: 0.60, color: 'black', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20
    },
    footer: {
        position: 'absolute',
        paddingHorizontal: 25,
        bottom: 10,
        width: '100%'

    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    emty: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: '#000'
    }

})