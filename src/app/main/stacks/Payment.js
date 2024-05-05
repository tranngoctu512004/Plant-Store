import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HeaderCustom from '../../components/HeaderCustom'
const Payment = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <HeaderCustom

        leftIcon={require('../../../../assets/arrowLeft.png')}
        title={'Thanh toán'}
      />
      <View style={styles.content}>
        <Text style={styles.caption}>Thông tin khách hàng</Text>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>Trần Minh Trí</Text>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>tranminhtri@gmail.com</Text>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>Địa chỉ</Text>
        <View style={styles.line}></View>
        <Text style={styles.textContent}>Số điện thoại</Text>
        <View style={styles.line}></View>
        <Text style={styles.caption}>Phương thức vận chuyển</Text>
        <View style={styles.line}></View>
        <View style={styles.containerCheckMethod}>
          <View>
            <Text style={styles.textGiaoHang}>Giao hàng Nhanh - 15.000đ</Text>
            <Text style={styles.textContent2}>Dự kiến giao hàng 5-7/9</Text>
          </View>

          <Image style={styles.check} source={require('./../../../../assets/check.png')} />
        </View>

        <View style={styles.line}></View>
        <Text style={styles.caption}>Giao hàng COD - 20.000đ</Text>
        <Text style={styles.textContent2}>Dự kiến giao hàng 5-7/9</Text>
        <View style={styles.line}></View>
        <Text style={styles.caption}>Hình thức thanh toán</Text>
        <View style={styles.line}></View>
        <View style={styles.containerCheckMethod}>
          <Text style={styles.textGiaoHang}>Thẻ VISA/MASTERCARD</Text>
          <Image style={styles.check} source={require('./../../../../assets/check.png')} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.caption}>Thẻ ATM</Text>

      </View>
      <View style={styles.footer}>
        <View style={styles.rowLayout}>
          <Text>Tạm tính</Text>
          <Text style={styles.price}>500.000đ</Text>
        </View>
        <View style={styles.rowLayout}>
          <Text style={styles.tamtinh}>Phí vận chuyển</Text>
          <Text style={styles.price}>15.000đ </Text>
        </View>
        <View style={styles.rowLayout}>
          <Text style={styles.tamtinh}>Tổng cộng</Text>
          <Text style={styles.total}>515.000đ </Text>
        </View>
        <TouchableOpacity style={styles.buttonPayment}>
          <Text style={styles.textButton}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  textButton:{
    color: 'white', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', textTransform: 'uppercase', lineHeight: 20,
  },
  buttonPayment: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ABABAB',
    borderRadius:8,
    marginTop:10,
  },
  total: {
    width: 94, height: 25, textAlign: 'right', color: '#007537', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
  },
  tamtinh: {
    width: 94, height: 25, opacity: 0.60, color: 'black', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
  },
  footer: {
    paddingVertical: 15,
    marginHorizontal: 24,

  },
  price: {
    width: 94, height: 19, textAlign: 'right', color: 'black', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
  },
  rowLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  check: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 15,
    right: 10,
  },
  containerCheckMethod: {
    flexDirection: 'row',

  },
  textGiaoHang: {
    color: '#007537',
    marginTop: 15,

  },
  textContent2: {
    color: '#7D7B7B', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
  },
  textContent: {
    marginTop: 20,
    color: '#7D7B7B', fontSize: 14, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
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
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    paddingHorizontal: 48,

  }
})