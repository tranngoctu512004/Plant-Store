import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStackNavigation from './authen/AuthenStackNavigation'
import MainStackNavigation from './main/MainStackNavigation'
import { AppContext } from './main/AppContext'
import { store } from './store/Store'
import { Provider } from 'react-redux'

const AppNavigation = () => {
    const { isLogin } = useContext(AppContext)
    return (
        <Provider store={store}>
            <NavigationContainer>
                {
                    isLogin ?
                        <MainStackNavigation /> :
                        <AuthenStackNavigation />
                }
            </NavigationContainer>
        </Provider>

    )
}

export default AppNavigation