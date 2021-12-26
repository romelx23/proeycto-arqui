import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native'
import { RoleContext } from '../../context/RoleContext';
import { AgregarRoleFetch } from '../../helpers/fetchRole';
import { useNavigation, useTheme } from '@react-navigation/native';
import { showContext } from '../../context/ShowMessage';
import MessageIndicator from '../../components/MessageIndicator';
import { MessageValidatorData } from '../../components/MessageValidatorData';


const AgregarRole = () => {
    const {colors}=useTheme();

    const { getRoles2 } = useContext(RoleContext)
    const navigation = useNavigation();

    const { load, setLoad } = useContext(showContext);


    const [role, setRole] = useState({
        rol: "",
    })
    const handleChange = (name: string, value: string) => setRole({ ...role, [name]: value });

    const showAlertValidarDatos = (mensaje: string) => {
        Alert.alert(
            "Datos no validos",
            `${mensaje}`,
            [
                {
                    text: "Aceptar",
                    onPress: () => {
                    },
                    style: "destructive",
                },
            ],
            {
                cancelable: true,
                onDismiss: () => {
                },
            }
        );
    }


    const handleSubmit = async () => {

        if(!role.rol){
            MessageValidatorData("El nombre del rol es obligatorio");
            return;
        }

        setLoad(true);
        try {
            const a = await AgregarRoleFetch(role)
            getRoles2();
            setLoad(false)
            navigation.goBack()
            
        } catch (error) {
            console.log("No se puedo agregar el rol", error)
        }

    }

    return (
        <View
            style={style.contenedorAgregarRole}
        >
        <MessageIndicator loading={load} />

            <Text style={{color:colors.text}}>Nombre del Rol</Text>
            <TextInput
                style={style.input}
                placeholder="EJEMPLO_ROL"
                placeholderTextColor="#ADADAD"
                // value={producto.nombre}
                onChangeText={(a) => handleChange("rol", a)}
            />

            <TouchableOpacity
                style={style.buttonSave}
                onPress={handleSubmit}>
                <Text
                    style={style.buttonSaveText}
                >
                    Agregar Rol
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    contenedorAgregarRole: {
        flex: 1,
        padding: 20,
    },
    input: {
        width: "100%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#fff",
        height: 40,
        color: "#000",
        textAlign: "center",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#fff"
    },
    buttonSave: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
        marginBottom: 3,
        marginTop: 6,
        backgroundColor: "#10ac84",
        width: "100%",
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        textTransform: "uppercase",
    },
})

export default AgregarRole
