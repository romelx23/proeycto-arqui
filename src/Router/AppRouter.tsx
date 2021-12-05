import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import DetalleProducto from '../screens/Home/DetalleProducto';
import AgregarProducto from '../screens/Home/AgregarProducto';


const Stack = createNativeStackNavigator();


const AppRouter = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} ></Stack.Screen>
            <Stack.Screen name="login" component={LoginScreen} ></Stack.Screen>
            <Stack.Screen name="detalleProducto" component={DetalleProducto} ></Stack.Screen>
            <Stack.Screen name="agregarPorducto" component={AgregarProducto} ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
    
      );
}

export default AppRouter
