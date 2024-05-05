import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import HeaderCustom from '../../components/HeaderCustom'
const Account = (props) => {
  const { navigation } = props;
  const gotoEdit = () => { navigation.navigate('EditInformation') }
  const gotoQA = () => { navigation.navigate('Question') }
  const gotoHistoryOrder = () => { navigation.navigate('HistoryOrder') }
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <HeaderCustom
        title={'PROFILE'}
      />
      <View style={styles.containerUser}>
        <Image style={styles.imgUser} source={require('./../../../../assets/userImg.png')} />
        <View >
          <Text style={styles.userName}>Trần Minh Trí</Text>
          <Text>tranminhtri@gmail.com</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <Text style={styles.textChung}>Chung</Text>
          <View style={styles.line}></View>
        </View>
        <Text onPress={gotoEdit} style={styles.textItem} >Chỉnh sửa thông tin</Text>
        <Text style={styles.textItem} >Cẩm nang trồng cây</Text>
        <Text onPress={gotoHistoryOrder} style={styles.textItem} >Lịch sử giao dịch</Text>
        <Text onPress={gotoQA} style={styles.textItem} > Q & A</Text>
        <View style={styles.contentItem}>
          <Text style={styles.textChung}>Bảo mật và Điều khoản</Text>

          <View style={styles.line}></View>
        </View>
        <Text style={styles.textItem} >Điều khoản và điều kiện</Text>
        <Text style={styles.textItem} >Chính sách quyền riêng tư</Text>
        <Text style={styles.textItem2} >Đăng xuất</Text>

      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  textItem2: {
    marginLeft: 24,
    color: '#FF0000', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
  },
  textItem: {
    marginLeft: 24,
    color: 'black', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#ABABAB',
    marginTop: 5,
  },
  textChung: {
    marginTop: 15,
    width: 279, height: 22.59, color: '#7F7F7F', fontSize: 16, fontFamily: 'Lato', fontWeight: '400', lineHeight: 20,
  },
  contentItem: {
    paddingHorizontal: 24,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    gap: 15,
  },
  userName: {
    color: 'black', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
  },
  imgUser: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerUser: {
    paddingVertical: 15,
    paddingHorizontal: 48,
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  }
})