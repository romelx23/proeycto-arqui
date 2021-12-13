import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Role from '../screens/Role/Role';

const Drawer = createDrawerNavigator();

export default function Sidebar() {
    return (
        <Drawer.Navigator
            drawerContent={(props)=><CustomDrawer {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#333'
                },
                headerTitleStyle: {
                    color: '#fff'
                },
                headerTintColor: '#fff',
                drawerStyle: {
                    backgroundColor: '#22629e',
                    width: 240,
                },
            }}
            initialRouteName="home">
            <Drawer.Screen
                name="Task App"
                component={HomeScreen} />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen} />
            <Drawer.Screen
                name="role"
                component={Role} />
        </Drawer.Navigator>
    )
}
