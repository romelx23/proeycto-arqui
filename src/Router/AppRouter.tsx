import React, { useContext } from "react";
import { DarkTheme, NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login/LoginScreen";
import DetalleProducto from "../screens/Home/DetalleProducto";
import AgregarProducto from "../screens/Home/AgregarProducto";
import RegisterScreen from "../screens/Register/RegisterScreen";
import UpdateScreen from "../screens/UpdateScreen/UpdateScreen";
import Sidebar from "../components/Sidebar";
import AgregarUsuario from "../screens/ProfileScreen/AgregarUsuario";
import ActualizarUsuario from "../screens/ProfileScreen/ActualizarUsuario";
import AgregarRole from "../screens/Role/AgregarRole";
import ModificarRole from "../screens/Role/ModificarRole";
import { themeContext } from '../context/themeContext';
import ContactScreen from "../screens/SuportScreen/ContactScreen";
import GmailScreen from "../screens/SuportScreen/GmailScreen";
import i18n from "./../utils/i18n.config";
import ActulizarDatosUser from "../screens/perfil/ActulizarDatosUser";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

type RootStackParamList = {
  Home: undefined;
  TaskFromScreen: undefined;
  login: undefined;
  SignUpScreen: undefined;
  UpdateImage: undefined;
  DetailScreen: undefined;
};


// const Stack = createNativeStackNavigator();
const Stack = createSharedElementStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text:'#3a3e44',
    card:'#4385ff',
    background:'#e0e4f3',
    primary:'#f0f7ff'
  },
  cardColor:'#A7C5DD'
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text:'#f0f7ff',
    card:'#244c95',
    background:'#35373b',
    primary:'#504f4f'
  },
  cardColor:'#2f7fc0'
};

const AppRouter = () => {
  const { tema } = useContext(themeContext);
  return (
    <NavigationContainer theme={tema ? MyDarkTheme : MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="registrar"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="home"
          component={Sidebar}
          options={{
            headerShown: false,
            title: "Home",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="detalleProducto"
          component={DetalleProducto}
          options={{
            title: `${i18n.t("Producto")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            // animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="agregarPorducto"
          component={AgregarProducto}
          options={{
            title: `${i18n.t("Agregar Porducto")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="actualizarPorducto"
          component={UpdateScreen}
          options={{
            title: `${i18n.t("Actualizar Producto")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="agregarUsuario"
          component={AgregarUsuario}
          options={{
            title: `${i18n.t("Agregar Usuario")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="actualizarUsuario"
          component={ActualizarUsuario}
          options={{
            title: `${i18n.t("Actualizar Usuario")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="agregarRole"
          component={AgregarRole}
          options={{
            title: `${i18n.t("Agregar Rol")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="modificarRole"
          component={ModificarRole}
          options={{
            title: `${i18n.t("Modificar Rol")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{
            title: `${i18n.t("Enviar por WhatsApp")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="GmailScreen"
          component={GmailScreen}
          options={{
            title: `${i18n.t("Enviar por Gmail")}`,
            headerStyle: { backgroundColor: "#333" },
            headerTitleStyle: { color: "#ffffff" },
            headerTintColor: "#fff",
            animation: "fade_from_bottom",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="actualizarDatosUser"
          component={ActulizarDatosUser}
          options={{
            title: `${i18n.t("Actualizar Datos del Usuario")}`,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
