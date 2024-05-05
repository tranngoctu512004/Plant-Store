import { View, Text, Image } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// tabs
import Home from './tabs/Home'
import Search from './tabs/Search'
import Notifications from './tabs/Notifications'
import Account from './tabs/Account'

const Tab = createBottomTabNavigator()
const MainTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: '#FFFFFF', height: 64 },
                tabBarLabelStyle: { display: 'none' },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#000000',
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? require('../../../assets/home2.png') : require('../../../assets/home.png');
                    } else if (route.name === 'Search') {
                        iconName = focused ? require('../../../assets/search2.png') : require('../../../assets/search.png');
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? require('../../../assets/bell2.png') : require('../../../assets/bell.png');
                    } else if (route.name === 'Account') {
                        iconName = focused ? require('../../../assets/user2.png') : require('../../../assets/user.png');
                    }
                    return <Image source={iconName} style={{ width: 24, height: 30 }} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

// stacks
import EditInformation from './stacks/EditInformation'
import Cart from './stacks/Cart'
import Detail from './stacks/Detail'
import ListProducts from './stacks/ListProducts'
import Payment from './stacks/Payment'
import Question from './stacks/Question'
import HistoryOrder from './stacks/HistoryOrder'
const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="ListProducts" component={ListProducts} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="EditInformation" component={EditInformation} />
            <Stack.Screen name="Question" component={Question} />
            <Stack.Screen name="HistoryOrder" component={HistoryOrder} />
        </Stack.Navigator>
    )
}

export default MainStackNavigation