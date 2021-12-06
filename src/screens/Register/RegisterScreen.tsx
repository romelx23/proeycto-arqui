import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native'
import { Resgistrar } from '../../helps/fetch';
import { PropsRegisterScreen } from '../../interfaces/login';

const RegisterScreen = ({navigation}:PropsRegisterScreen) => {

    const showAlert = (mensaje: string) =>
        Alert.alert(
            "Datos no validos",
            mensaje,
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


    const [user, setUser] = useState({
        nombre: "sam",
        edad: "11",
        correo: "sam@gmail.com",
        password: "123456",
        password2: "123456",
        rol: "USER_ROLE",
    });
    const [editing, setEditing] = useState(false);

    const handleChange = (name: string, value: string) => setUser({ ...user, [name]: value });

    const handleSubmit = async () => {

        if(user.password !== user.password2){
            return showAlert("Las contraseñas no son iguales")
        }

        try {
            const a = await Resgistrar(user);
            console.log(a)


            if (a.usuario?.uid) {
                console.log("tiene uID")
                navigation.replace!("home");
            } else {
                console.log("usuario no creado")
                console.log(a.errors[0].msg)

                showAlert(a.errors[0].msg);
            }

        } catch (error) {
            console.log("Error en TRYcATCH, rEGISTER", error)
        }


    };




    return (
        <View style={styles.contenedor}>
            <View>
                <Text>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    placeholderTextColor="#576574"
                    value={user.nombre}
                    onChangeText={(text) => handleChange("nombre", text)}
                />
                <Text>Edad:</Text>
                <TextInput
                    style={styles.input}
                    // autoComplete="cc-number"
                    keyboardType="number-pad"
                    placeholder="Edad"
                    placeholderTextColor="#576574"
                    value={user.edad}
                    onChangeText={(text) => handleChange("edad", text)}
                />

                <Text>Correo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    keyboardType="email-address"
                    placeholderTextColor="#576574"
                    value={user.correo}
                    onChangeText={(text) => handleChange("correo", text)}
                />

                <Text>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="contraseña"
                    placeholderTextColor="#576574"
                    value={user.password}
                    onChangeText={(text) => handleChange("password", text)}
                />

                <Text>Vuelva escribir contraseña:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="contraseña"
                    placeholderTextColor="#576574"
                    value={user.password2}
                    onChangeText={(text) => handleChange("password2", text)}
                />

                {/* <Text>Rol:</Text> 
                 <TextInput
                    style={styles.input}
                    placeholder="Rol"
                    placeholderTextColor="#576574"
                    value={user.rol}
                    onChangeText={(text) => handleChange("rol", text)}
                /> */}

                <TouchableOpacity
                    style={styles.buttonSave}
                    onPress={handleSubmit}>
                    <Text
                        style={styles.buttonText}
                    >
                        Registrar
                    </Text>
                </TouchableOpacity>



            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        // backgroundColor: "#181919",
        padding: 20,
        flex: 1,
        justifyContent: "center",
    },
    input: {
        width: "90%",
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
        width: "90%",
    },
    buttonUpdate: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#e58e26",
        width: "90%",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
});

export default RegisterScreen
