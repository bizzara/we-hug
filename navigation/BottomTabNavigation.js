import { View, Text, Platform } from 'react-native'
import React from 'react'
import {
    Feather,
    Ionicons,
    FontAwesome,
    FontAwesome5,
} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS } from '../constants'
import { Chat, Create, Feed, Notifications, Profile } from '../screens'
import { LinearGradient } from 'expo-linear-gradient'

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Feather
                                name="home"
                                size={24}
                                color={focused ? COLORS.primary : COLORS.black}
                            />
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons
                                name="chatbox-outline"
                                size={24}
                                color={focused ? COLORS.primary : COLORS.black}
                            />
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Create"
                component={Create}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <LinearGradient
                                colors={['#F68464', '#EEA849']}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: Platform.OS == 'ios' ? 50 : 60,
                                    height: Platform.OS == 'ios' ? 50 : 60,
                                    top: Platform.OS == 'ios' ? -10 : -20,
                                    borderRadius: 22,
                                    borderColor: '#fff',
                                    borderWidth: 4,
                                }}
                            >
                                <Feather
                                    name="plus-circle"
                                    size={24}
                                    color={COLORS.white}
                                />
                            </LinearGradient>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome5
                                name="heart"
                                size={24}
                                color={focused ? COLORS.primary : COLORS.black}
                            />
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome
                                name="user-circle"
                                size={24}
                                color={focused ? COLORS.primary : COLORS.black}
                            />
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation
