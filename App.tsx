import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

// isSignedIn ? (
//   <>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//     <Stack.Screen name="Settings" component={SettingsScreen} />
//   </>
// ) : (
//   <>
//     <Stack.Screen name="SignIn" component={SignInScreen} />
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//   </>
// )

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} ></Stack.Screen>
        <Stack.Screen name="login" component={LoginScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
