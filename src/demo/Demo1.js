import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useContext, createContext } from 'react'
const Screen1 = (props) => {
    const { count, setCount } = useContext(MyContext)
    return (
        <View>
            <Text style={myDemo1Style.hello}>Screen1: {count}</Text>
        </View>
    )
}
const Screen2 = () => {
    const { count, setCount } = useContext(MyContext)
    return (
        <View>
            <Text onPress={() => setCount(Math.random())} style={myDemo1Style.hello}>Screen2</Text>
        </View>
    )
}
// tạo context
export const MyContext = createContext()
// tạo kho chứa data dùng chung cho app
export const MyProvider = (props) => {
    const { children } = props
    const [count, setCount] = useState(10) // dữ liệu dùng chung
    return (
        <MyContext.Provider value={{ count, setCount }}>
            {children}
        </MyContext.Provider>
    )
}
const Demo1 = () => {
    return (
        <MyProvider>
            <Screen1 />
            <Screen2 />
        </MyProvider>
    )
}
export default Demo1
const myDemo1Style = StyleSheet.create({
    hello: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
})