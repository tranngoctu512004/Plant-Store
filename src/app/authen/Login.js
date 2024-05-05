import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import InputText from '../components/InputText'
import ButtonAuthen from '../components/ButtonAuthen'
import { AppContext } from '../main/AppContext'
import { useDispatch, useSelector } from 'react-redux'
import { registerAccount } from '../reducers/RegisterSlice'

const Login = (props) => {

  const [fullInfor, setfullInfor] = useState('');
  const { isLogin, setIsLogin } = useContext(AppContext);
  const [fdata, setfdata] = useState(
    {
      userInfor: '',
      password: '',
    }
  );

  const dispatch = useDispatch();
  const { registerData, registerStatus } = useSelector((state) => state.register);

  const login = () => {
    if (fdata.userInfor == '' || fdata.password == '') {
      setfullInfor("Vui lòng nhập đầy đủ thông tin")
    } else {
      setfullInfor('');
      fetch('http://172.20.10.4:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setfullInfor(data.error);
          } else {
            setIsLogin(true)
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });

    }
  }
  const { navigation } = props;
  const gotoRegister = () => navigation.navigate('Register')

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <Image source={require('../../../assets/Ellipse2.png')} style={styles.headerImg} />
      <Text style={styles.headerText}>Chào mừng bạn</Text>
      <Text style={styles.headerText2}>Đăng nhập tài khoản</Text>
      <View style={styles.content}>
        <InputText placeholder={'Nhập email hoặc số điện thoại'} changText={(text) => setfdata({ ...fdata, userInfor: text })} />
        <InputText placeholder={'Mật khẩu'} secureTextEntry={true} changText={(text) => setfdata({ ...fdata, password: text })} />

        <Text style={styles.textError}>{fullInfor} </Text>
        <View style={styles.taikhoan}>
          <Image source={require('../../../assets/checkbox.png')} style={styles.checkboxImg} />
          <Text style={styles.textNho}>Nhớ tài khoản</Text>
          <Text style={styles.textForgot}>Forgot Password ? </Text>

        </View>
        <ButtonAuthen content={'Đăng nhập'} onPress={login} />
        <View style={styles.containerHoac}>
          <View style={styles.line}></View>
          <Text style={styles.textHoac}>Hoặc</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.containerGG}>
          <Image source={require('../../../assets/logoGG.png')} style={styles.imageLogo2} />
          <Image source={require('../../../assets/logoFB.png')} style={styles.imageLogo} />
        </View>
        <Text style={styles.textFooter}>Bạn không có tài khoản
          <Text style={styles.textFooter2} onPress={gotoRegister}>Tạo tài khoán</Text>
        </Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  textError: {
    color: 'red',
  },
  textFooter: {
    textAlign: 'center',
    marginTop: 30,
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins'

  },
  textFooter2: {
    color: '#009245'
  },
  containerGG: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,

  },
  imageLogo: {
    marginLeft: 30,
  },
  textHoac: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',

  },
  line: {
    width: 132,
    height: 2,
    backgroundColor: '#4CAF50',
    marginLeft: 9,
    marginRight: 9,
    fontFamily: 'Poppins'
  },
  containerHoac: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 31,
  },
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
  textForgot: {
    marginLeft: 120,
    color: '#009245',
    fontWeight: '500',
    fontFamily: 'Poppins'
  },
  textNho: {
    marginLeft: 5,
    color: '#949090',
    fontWeight: '500',
    fontFamily: 'Poppins'

  },
  taikhoan: {
    flexDirection: 'row',
    marginTop: 13,
    width: '100%',


  },
  input2: {
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 10,
    padding: 14,
    marginTop: 10,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  content: {
    paddingHorizontal: 30,

  },
  input: {
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 10,
    padding: 14,
    marginTop: 20,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  headerText2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    marginTop: 4,
    fontFamily: 'Poppins',

  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginTop: 4,
    fontFamily: 'Poppins',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImg: {
    marginTop: -175,
    marginLeft: -70,
    marginRight: -52

  }
})