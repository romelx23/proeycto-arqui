import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


import { ActualizarRoleFetch } from '../../helpers/fetchRole';
import { RoleContext } from '../../context/RoleContext';
import { showContext } from '../../context/ShowMessage';
import MessageIndicator from '../../components/MessageIndicator';
import { MessageValidatorData } from '../../components/MessageValidatorData';



const ModificarRole = () => {
    const {colors}=useTheme()

    const { getRoles2 } = useContext(RoleContext)
    const { load, setLoad } = useContext(showContext);

    const navigation = useNavigation();
    const route = useRoute<any>();

    const [role, setRole] = useState({
        rol: route.params.item.rol,
        // estado?: boolean;
        _id: route.params.item._id
    })

    const handleChange = (name: string, value: string) => setRole({ ...role, [name]: value });

    const handleSubmit = async () => {

      

        setLoad(true)
        try {
            const a = await ActualizarRoleFetch(role);
            getRoles2();
            navigation.goBack();
            setLoad(false)
        } catch (error) {
            console.log("ocurrio un error en Modificar Role", error)
        }
    }

    const showAlertModificarSubmit = () => {

        if(!role.rol){
            MessageValidatorData("El nombre del rol es obligatorio");
            return;
        }

        Alert.alert(
            "Modificar Rol",
            "¿Seguro que quiere modificar el rol?",
            [
                {
                    text: "Aceptar",
                    onPress: () => {
                        handleSubmit();
                    },
                    style: "destructive",
                },
                {
                    text: "Cancelar",
                    onPress: () => {
                        console.log("Presiono Cancelar");
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


    return (
        <View
            style={style.contenedorAgregarRole}
        >
            <MessageIndicator loading={load} />

            <Text style={{color:colors.text}}>Nombre del producto</Text>
            <TextInput
                style={style.input}
                placeholder="EJEMPLO_ROL"
                placeholderTextColor="#ADADAD"
                value={role.rol}
                onChangeText={(a) => handleChange("rol", a)}
            />

            <TouchableOpacity
                style={style.buttonSave}
                onPress={showAlertModificarSubmit}>
                <Text
                    style={style.buttonSaveText}
                >
                    Modificar Rol
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

export default ModificarRole
