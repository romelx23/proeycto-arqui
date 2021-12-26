import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import Role from "../screens/Role/Role";
import SettingScreen from "../screens/SettingsScreen/SettingScreen";
import SuportScreen from "../screens/SuportScreen/SuportScreen";
import i18n from "./../utils/i18n.config";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { fontContext } from "../context/FontContext";
import { AuthContext } from "../context/AuthContext";
const Drawer = createDrawerNavigator();

export default function Sidebar() {
  const { rol } = useContext(AuthContext);
  const { fuente } = useContext<any>(fontContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#5a6ac7",
        drawerActiveTintColor: "#37d7ff",
        drawerInactiveTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#333",
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#22629e",
          width: 240,
        },
        drawerLabelStyle: {
          fontFamily: fuente,
        },
      }}
      initialRouteName="home"
    >
      <Drawer.Screen
        name="Task App"
        options={{
          title: `${i18n.t("Teca App")}`,
          drawerIcon: ({ size }) => (
            <FontAwesome name="home" color={"#fff"} size={size} />
          ),
          drawerLabel: `${i18n.t("Inicio")}`,
        }}
        component={HomeScreen}
      />
      {rol === "ADMIN_ROLE" ? (
        <>
          <Drawer.Screen
            name="Profile"
            options={{
              title: `${i18n.t("Listado Usuarios")}`,
              drawerIcon: ({ size }) => (
                <FontAwesome name="user" color={"#fff"} size={size} />
              ),
              drawerLabel: `${i18n.t("Usuarios")}`,
            }}
            component={ProfileScreen}
          />
          <Drawer.Screen
            name="role"
            options={{
              title: `${i18n.t("Listado de Roles")}`,
              drawerIcon: ({ size }) => (
                <FontAwesome name="bookmark" color={"#fff"} size={size} />
              ),
              drawerLabel: `${i18n.t("Roles")}`,
            }}
            component={Role}
          />
        </>
      ) : (
        <></>
      )}
      <Drawer.Screen
        name="SettingsScreen"
        options={{
          title: `${i18n.t("Configuración")}`,
          drawerIcon: ({ size }) => (
            <FontAwesome name="cogs" color={"#fff"} size={size} />
          ),
          drawerLabel: `${i18n.t("Configuración")}`,
        }}
        component={SettingScreen}
      />
      <Drawer.Screen
        name="SupportScreen"
        options={{
          title: `${i18n.t("Soporte")}`,
          drawerIcon: ({ size }) => (
            <FontAwesome name="phone" color={"#fff"} size={size} />
          ),
          drawerLabel: `${i18n.t("Soporte")}`,
        }}
        component={SuportScreen}
      />
    </Drawer.Navigator>
  );
}
