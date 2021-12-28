import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity,Alert } from 'react-native'
import MessageIndicator from '../../components/MessageIndicator';
import { AuthContext } from '../../context/AuthContext';
import { showContext } from '../../context/ShowMessage';
import { MoificarNombreUser } from '../../helpers/fetchImageUser';
import i18n from "../../utils/i18n.config";
import { useNavigation } from '@react-navigation/native';



const ActulizarDatosUser = () => {

    const { auth,setAuth,setRol } = useContext(AuthContext);
    const { load, setLoad } = useContext(showContext);
    const handleChange = (name: string, value: string) =>
        setUser({ ...user, [name]: value });


    const [user, setUser] = useState({
        nombre: auth.nombre,
    })

    const navigation = useNavigation();

    const showAlertData = () => {


        Alert.alert(
            "Digite nombre ",
            "¿El nombre es obligatorio?",
            [
                {
                    text: "Aceptar",
                    onPress: () => {
                    },
                    style: "destructive",
                }
            ],
            {
                cancelable: true,
                onDismiss: () => {
                },
            }
        );
    }

    const handleSubmit = async () => {
        console.log(user.nombre)
        if( !user.nombre ){
            return showAlertData();
        }

        setLoad(true)

        try {

            const {usuario} = await MoificarNombreUser(auth.uid, auth, user.nombre)
            console.log(usuario);
            setLoad(false)
            setAuth({...usuario, logged: true})
            setRol(usuario.rol)

            navigation.goBack();
        } catch (error) {
            console.log(error)
        }

      };


    return (
        <View
            style={styles.contenedor}
        >
      <MessageIndicator loading={load} />

            <Text>
            {`${i18n.t("Nombre:")}`}
                </Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="#576574"
                value={user.nombre}
                onChangeText={(text) => handleChange("nombre", text)}
            />

            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    contenedor : {
        padding: 15,
        flex:1,
    },
    input: {
        width: "100%",
        marginBottom: 10,
        fontSize: 14,
        backgroundColor: "#fff",
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
      buttonText: {
        color: "#fff",
        textAlign: "center",
      },

})

export default ActulizarDatosUser
