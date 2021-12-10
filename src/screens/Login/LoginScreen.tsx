import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Alert
} from 'react-native'

import { Icon } from "react-native-elements"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getVerificarUsuario, login } from '../../helpers/fetch';
import { PropsLoginScreen } from '../../interfaces/login';




const LoginScreen = ({ navigation }: PropsLoginScreen) => {

    useEffect(() => {
        verificarUsuario();
    }, [])

    const [user, setUser] = useState({
        correo: "Carlos@gmail.com",
        password: "123456"
    })


    const verificarUsuario = async () => {
        const respVerificarToquen = await getVerificarUsuario();
        if (!respVerificarToquen.token) {
            return;
        } else {
            await AsyncStorage.setItem("token", respVerificarToquen.token)
            navigation?.replace!('home');
        }
    }

    const showAlert = () =>
        Alert.alert(
            "Usuario no encontrado",
            "Verifique correo / contraseña",
            [
                {
                    text: "Aceptar",
                    onPress: () => {
                        console.log("Preciono Aceptar")
                    },
                    style: "destructive",
                }
            ],
            {
                cancelable: true,
                onDismiss: () => {
                    console.log("preciono otro lado que no es el alert")
                },
            }
        );


    const handleChange = (name: string, value: string) => setUser({ ...user, [name]: value });

    const handleSubmit = async () => {
        try {
            const a = await login(user.correo, user.password);
            console.log("222222", a.msg)
            if (a.usuario?.uid) {
                console.log(a.token);
                await AsyncStorage.setItem("token", a.token)
                navigation.replace!("home");
            } else {
                showAlert();
            }
        } catch (error) {
            console.log("ERROR EN EL CHAT DE LOGIN", error)
        }

    };

    const handleShowRegister = () => {
        navigation.navigate!("registrar")
    }


    return (
        <View
            style={style.contenedor}
        >
            <View>
                <Text
                    style={style.labelTitulo}
                >Correo</Text>

                <View
                    // style={ style.contenedorIconInput }
                >
                    {/* <Icon
                        type="material-community"
                        name="plus"
                        color="#000"
                        size={26}
                    >
                    </Icon> */}
                    <TextInput

                        autoFocus={false}
                         autoCapitalize="none"
                        style={style.input}
                        placeholder="Exmaple@teca.com"
                        placeholderTextColor="#576574"
                        value={user.correo}
                        onChangeText={(text) => handleChange("correo", text)}
                    />
                </View>

                <Text
                    style={style.labelTitulo}
                >Contraseña</Text>
                <TextInput
                    // keyboardType ="visible-password"
                    style={style.input}
                    autoCompleteType="password"
                    placeholder="***********"
                    secureTextEntry={true}
                    placeholderTextColor="#576574"
                    value={user.password}
                    onChangeText={(text) => handleChange("password", text)}
                />

                <TouchableOpacity
                    style={style.buttonSave}
                    onPress={handleSubmit}>
                    <Text
                        style={style.buttonText}
                    >
                        Iniciar session
                    </Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={style.buttonSave}
                    onPress={handleGoogleSigin}>
                    <Text
                        style={style.buttonText}
                    >
                        Iniciar con Google
                    </Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    style={style.buttonRegister}
                    onPress={handleShowRegister}>
                    <Text
                        style={style.buttonText}
                    >
                        Crear cuenta
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};



const style = StyleSheet.create({
    contenedor: {
        backgroundColor: "#A7C5DD",
        // borderColor: "#000",
        // borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    contenedorIconInput:{
        display: 'flex',
        flexDirection: "row",
        borderBottomColor: "#10ac84",
        borderBottomWidth: 1,
        height:30,
        marginBottom: 7,
    },
    input: {
        width: "100%",
        fontSize: 14,
        // borderWidth: 1,
        // borderColor: "#10ac84",
        height: 30,
        color: "#000",
        textAlign: "center",
        padding: 4,
        borderRadius: 5,
    },
    inputFocus:{
        backgroundColor: "#000"
    },
    labelTitulo: {
        fontWeight: "500",
        fontSize: 15,
        marginBottom: 4,
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#10ac84",
        width: "100%",
    },
    buttonRegister: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#e58e26",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
});

export default LoginScreen
