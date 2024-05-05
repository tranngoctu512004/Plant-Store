import { StyleSheet, Text, View, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import InputText from '../components/InputText'
import ButtonAuthen from '../components/ButtonAuthen'
import { useDispatch, useSelector } from 'react-redux'
import { registerAccount } from '../reducers/RegisterSlice'
const Register = (props) => {
  const { navigation } = props;
  const gotoLogin = () => navigation.navigate('Login')
  const [fullInfor, setfullInfor] = useState('')
  const dispatch = useDispatch();
  const { registerData, registerStatus } = useSelector((state) => state.register);
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };
  const isValidPassword = (password) => {
    // Kiểm tra mật khẩu có ít nhất 8 ký tự
    if (password.length < 8) {
      return false;
    }
    // Kiểm tra mật khẩu có ít nhất một số và một chữ cái
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    return hasNumber && hasLetter;
  };
  useEffect(() => {
    if (registerStatus === "failed") {
      console.log(registerData); // Kiểm tra dữ liệu lỗi từ server
      setfullInfor(registerData.error); // Gán lỗi vào state fullInfor
    } else if (registerStatus === "succeeded") {
      // Nếu đăng ký thành công, chuyển hướng đến trang đăng nhập
      navigation.navigate('Login');
    }
  }, [registerStatus, registerData, navigation]);


  const [fdata, setfdata] = useState(
    {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  );
  const register = () => {
    if (fdata.name === '' || fdata.password === '' || fdata.email === '' || fdata.phone === '') {
      setfullInfor('Vui lòng nhập đầy đủ thông tin');
    } else if (!isValidEmail(fdata.email)) {
      setfullInfor('Định dạng email không hợp lệ');
    } else if (!isValidPhoneNumber(fdata.phone)) {
      setfullInfor('Định dạng số điện thoại không hợp lệ');
    } else if (!isValidPassword(fdata.password)) {
      setfullInfor('Mật khẩu phải có ít nhất 8 ký tự và bao gồm ít nhất một số và một chữ cái');
    } else {
      setfullInfor('');
      dispatch(registerAccount(fdata));
      console.log(registerData)
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <Image source={require('../../../assets/Ellipse2.png')} style={styles.headerImg} />
      <View style={styles.containerHeaderText}>
        <Text style={styles.headerText}>Đăng ký</Text>
        <Text style={styles.headerText2}>Tạo tài khoản</Text>
      </View>
      <View style={styles.content}>
        <InputText placeholder={'Họ tên'} changText={(text) => setfdata({ ...fdata, name: text })} />
        <InputText placeholder={'E-mail'} changText={(text) => setfdata({ ...fdata, email: text })} />
        <InputText placeholder={'Số điện thoại'} changText={(text) => setfdata({ ...fdata, phone: text })} />
        <InputText placeholder={'Mật khẩu'} changText={(text) => setfdata({ ...fdata, password: text })} secureTextEntry={true} />
        <Text style={styles.textError}>{fullInfor} </Text>
        <View style={styles.poliContainer}>
          <Text style={styles.textPolicy}>
            Để đăng ký tài khoản, bạn đồng ý <Text style={styles.textPolicy2}>Terms &{'\n'} </Text><Text>        </Text><Text style={styles.textPolicy2}> Conditions</Text> and <Text style={styles.textPolicy2}>Privacy Policy</Text>.
          </Text>
        </View>
        <ButtonAuthen content={'Đăng ký'} onPress={register} />
        <View style={styles.containerHoac}>
          <View style={styles.line}></View>
          <Text style={styles.textHoac}>Hoặc</Text>
          <View style={styles.line}></View>
        </View>
        <View style={styles.containerGG}>
          <Image source={require('../../../assets/logoGG.png')} style={styles.imageLogo2} />
          <Image source={require('../../../assets/logoFB.png')} style={styles.imageLogo} />
        </View>
        <Text style={styles.textFooter}>Tôi đã có tài khoản
          <Text style={styles.textFooter2} onPress={gotoLogin}> Đăng nhập</Text>
        </Text>
      </View>
    </View>
  )
}

export default Register

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
    marginTop: 20,



  },
  poliContainer: {
    alignItems: 'center'
  },
  textPolicy: {
    fontFamily: 'Poppins',
    paddingHorizontal: 20,
    color: '#000',
    marginTop: 20,
    fontSize: 12,

  },
  textPolicy2: {
    color: '#009245',
    fontWeight: '500',
    textDecorationLine: 'underline'

  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerImg: {
    position: 'absolute',
    marginTop: -280,
    marginLeft: -70,
    marginRight: -52
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000000',
    fontFamily: 'Poppins',
    marginTop: 180,

  },
  containerHeaderText: {
    alignItems: 'center'
  },
  headerText2: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Poppins',
    marginTop: 13,

  },
  content: {
    paddingHorizontal: 31,

  },
  input: {
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Poppins',
  },
  input2: {
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: 10,
    padding: 14,
    marginTop: 10
  }
})