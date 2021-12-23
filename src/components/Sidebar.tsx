import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import Role from '../screens/Role/Role';
import SettingScreen from '../screens/SettingsScreen/SettingScreen';
import SuportScreen from '../screens/SuportScreen/SuportScreen';
import i18n from "./../utils/i18n.config";

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
                options={{
                    title: `${i18n.t("Teca App")}`,
                }}
                component={HomeScreen} />
            <Drawer.Screen
                name="Profile"
                options={{
                    title: `${i18n.t("Listado Usuarios")}`,
                }}
                component={ProfileScreen} />
            <Drawer.Screen
                name="SettingsScreen"
                options={{
                    title: `${i18n.t("Configuración")}`,
                }}
                component={SettingScreen} />
            <Drawer.Screen
                name="SupportScreen"
                options={{
                    title: `${i18n.t("Soporte")}`,
                }}
                component={SuportScreen} />
            <Drawer.Screen
                name="role"
                options={{
                    title: `${i18n.t("Listado de Roles")}`,
                }}
                component={Role} />
        </Drawer.Navigator>
    )
}
