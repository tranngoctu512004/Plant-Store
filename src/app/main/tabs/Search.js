import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native'
import React from 'react'
import HeaderCustom from '../../components/HeaderCustom'
const Search = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0)"
        translucent={true}
      />
      <HeaderCustom
        leftIcon={require('../../../../assets/arrowLeft.png')}
        title={'TÌM KIẾM'}
      />
      <TextInput style={styles.search} clearButtonMode='always' placeholder='Tìm kiếm' />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 20,


  }
})