import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import SectionView from '../../components/SectionView'
const Home = (props) => {
  const {navigation}=props
  const [category, setcategory] = useState([])
  const [productsData, setproductData] = useState([])
  const gotoCart = () => navigation.navigate('Cart')
  useEffect(() => {
    fetch('http://172.20.10.4:3000/category', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setcategory(data)

      })
      .catch(error => {
        console.error("Error:", error); //loi
      });
  }, []);
  useEffect(() => {
    fetch('http://172.20.10.4:3000/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setproductData(data);

      })
      .catch(error => {
        console.error("Error:", error); //loi
      });
  }, []);
  console.log('data', productsData)
  console.log('category', category)
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          backgroundColor="rgba(255, 255, 255, 0)"
          translucent={true}
        />
        <Image source={require('./../../../../assets/homeHeader.png')} style={styles.imgHeader} />
        <Text style={styles.textHeader}>Planta - toả sáng không gian nhà bạn</Text>
        <TouchableOpacity style={styles.cart} onPress={gotoCart} >
        <Image source={require('./../../../../assets/cartHomeHeader.png')} />
        </TouchableOpacity>
        <View style={styles.containerTextHeader}>
          <Text style={styles.xemhang}>Xem hàng mới về</Text>
          <Image source={require('./../../../../assets/arrowRight.png')} style={styles.arrowRight} />
        </View>
        <View style={styles.containerSection} >
          <SectionView categories={category} products={productsData} navigation={navigation} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            Combo chăm sóc (mới)
          </Text>
          <View style={styles.contentFooter}>
            <Text style={styles.textLemon}>Lemon Balm Grow Kit </Text>
            <Text style={styles.textLemon2}>Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu... </Text>
            <Image source={require('./../../../../assets/grow.png')} style={styles.grow} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  grow: {
    height: 134,
    width: 108,
    position:'absolute',
    right:0,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,

  },
  textLemon: {
    color: '#221F1F', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22,
  },
  textLemon2: {
    color: '#7D7B7B', fontSize: 16, fontFamily: 'Lato', fontWeight: '500', lineHeight: 22, width: 226,
  },
  contentFooter: {
    marginTop: 15,
    height: 134,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    padding: 24,



  },
  textFooter: {
    width: 325, height: 49, color: '#221F1F', fontSize: 24, fontFamily: 'Lato', fontWeight: '500', lineHeight: 34
  },
  footer: {
    paddingHorizontal: 24,

  },
  containerSection: {
    paddingVertical: 24,
    paddingHorizontal: 15,
  },
  xemhang: {
    color: '#007537',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '500',
    lineHeight: 22,

  },
  containerTextHeader: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: 159,
    marginLeft: 25,

  },
  imgHeader: {
    width: '100%',
    height: 205,
    marginTop: 113,

  },
  textHeader: {
    position: 'absolute',
    width: 223,
    height: 77,
    fontSize: 24,
    color: '#221F1F',
    marginTop: 75,
    marginLeft: 25,
    fontWeight: '500',
    fontFamily: 'Lato',
    lineHeight: 37,

  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  cart: {
    position: 'absolute',
    marginTop: 68,
    right: 25,

  }

})