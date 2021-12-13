import React from 'react'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import DetalleProducto from '../screens/Home/DetalleProducto';
import AgregarProducto from '../screens/Home/AgregarProducto';
import RegisterScreen from '../screens/Register/RegisterScreen';
import UpdateScreen from '../screens/UpdateScreen/UpdateScreen';
import Sidebar from '../components/Sidebar';
import BottonTabNavigator from '../components/BottonTabNavigator';
import AgregarUsuario from '../screens/ProfileScreen/AgregarUsuario';
import ActualizarUsuario from '../screens/ProfileScreen/ActualizarUsuario';

type RootStackParamList = {
  Home: undefined;
  TaskFromScreen: undefined,
  login: undefined,
  SignUpScreen: undefined,
  UpdateImage: undefined,
  DetailScreen: undefined
};

const Stack = createNativeStackNavigator();


const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        >
        </Stack.Screen>
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
            headerShown:false,
            title: 'Home'
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="detalleProducto"
          component={DetalleProducto}
          options={{
            title: 'Producto'
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="agregarPorducto"
          component={AgregarProducto}
          options={{
            title: 'Agregue Porducto'
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="actualizarPorducto"
          component={UpdateScreen}
          options={{
            title: "Actualizar Procuto",
            headerStyle: { backgroundColor: '#333' },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#fff',
            animation: 'fade',
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="agregarUsuario"
          component={AgregarUsuario}
          options={{
            title: "Agregar Usuario",
            headerStyle: { backgroundColor: '#333' },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#fff',
            animation: 'fade',
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="actualizarUsuario"
          component={ActualizarUsuario}
          options={{
            title: "Actualizar Usuario",
            headerStyle: { backgroundColor: '#333' },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#fff',
            animation: 'fade',
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter
