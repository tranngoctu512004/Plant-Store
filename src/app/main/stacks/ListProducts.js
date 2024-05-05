import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderCustom from '../../components/HeaderCustom';
import { useNavigation } from '@react-navigation/native';
import ItemProductCustom from '../../components/ItemProductCustom';
import ItemTopBar from '../../components/ItemTopBar';
const ListProducts = ({ route }) => {
  const { categoryID, categoryName } = route.params;
  const navigation = useNavigation();
  console.log(categoryID)
  const back = () => {
    navigation.goBack();
  }
  const [AllProduct, setAllProduct] = useState([])
  useEffect(() => {
    fetch('http://172.20.10.4:3000/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {

        setAllProduct(data);

      })
      .catch(error => {
        console.error("Error:", error); //loi
      });
  }, []);
  const Products = AllProduct.filter(product => product.category === categoryID);
  console.log(Products);

  return (
    <View style={styles.container}>
      <HeaderCustom
        onPress={back}
        leftIcon={require('../../../../assets/arrowLeft.png')}
        title={categoryName}
        rightIcon={require('../../../../assets/shopping-cart.png')}
      />
      <View style={styles.topbar}>
        <ItemTopBar
        name={'Tất cả'}
        ></ItemTopBar>
              <ItemTopBar
        name={'Hàng mới về'}
        ></ItemTopBar>
              <ItemTopBar
        name={'Ưa sáng'}
        ></ItemTopBar>
              <ItemTopBar
        name={'Ưa bóng'}
        ></ItemTopBar>
      </View>
<ItemProductCustom products={Products}/>
      
    </View>
  )
}

export default ListProducts

const styles = StyleSheet.create({
  topbar: {
    paddingHorizontal: 24,
    flexDirection:'row',
    paddingVertical:15,


  },
  containerItembar: {
    paddingHorizontal: 24,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})