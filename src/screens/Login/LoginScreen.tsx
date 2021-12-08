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
import { getVerificarUsuario, login } from '../../helpers/fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsLoginScreen } from '../../interfaces/login';





const LoginScreen = ({navigation}:PropsLoginScreen) => {

    useEffect(() => {
        
        verificarUsuario();
        
    }, [])

    const [user, setUser] = useState({
        correo: "Carlos@gmail.com",
        password: "123456"
    })


    const verificarUsuario = async ()=>{

        const token = await AsyncStorage.getItem("token") || "";
        const respVerificarToquen = await getVerificarUsuario(token);

        if(!!respVerificarToquen.token){
            return ;
        }else{
            await AsyncStorage.setItem("token", respVerificarToquen.token)
            navigation.replace!("home");
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
                onDismiss: () =>{
                    console.log("preciono otro lado que no es el alert")
                },
            }
        );

    // const [editing, setEditing] = useState(false);

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
            console.log("ERROR EN EL CHAT DE LOGIN",error)

        }

    };

    const handleShowRegister = () => {
        // navigation.navigate({key: "registrar"})
        // navigation.navigate( {name: "registrar",key: "" ,})
        navigation.navigate!("registrar")
    }


    return (
        <View
            style={style.contenedor}
        >
            <View>
                <Text>Correo</Text>
                <TextInput
                    style={style.input}
                    placeholder="Exmaple@teca.com"
                    placeholderTextColor="#576574"
                    value={user.correo}
                    onChangeText={(text) => handleChange("correo", text)}
                />

                <Text>Contraseña</Text>
                <TextInput
                    style={style.input}
                    placeholder="***********"
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
        // backgroundColor: "#181919",
        borderColor: "#000",
        borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    input: {
        width: "100%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#10ac84",
        height: 30,
        color: "#000",
        textAlign: "center",
        padding: 4,
        borderRadius: 5,
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
