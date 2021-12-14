import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { RoleContext } from '../context/RoleContext'

import { useNavigation } from '@react-navigation/native';
import { EliminarRole } from '../helpers/fetchRole';
import { showContext } from '../context/ShowMessage';
import MessageIndicator from './MessageIndicator';


const ItemRole = ({ item }: any) => {
    // console.log(item)
    const navigation = useNavigation();

    const { getRoles2 } = useContext(RoleContext)

    const showAlertEliminar = () =>{ 
        Alert.alert(
            "Eliminar Rol",
            "¿Seguro que quiere eliminar el rol?",
            [
                {
                    text: "Aceptar",
                    onPress: () => {
                        handleEliminar()
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

    const handleModificar = () => {
        navigation.navigate("modificarRole",{item})
    }

    const handleEliminar = async () => {
        try {
            await EliminarRole(item._id)
            getRoles2();
            
        } catch (error) {
            console.log("No se pudo eliminar el role", error)
        }
    }


    return (
        <View
            style={style.contenedorItem}
        >

            <Text>{item.rol}</Text>

            <View
                style={style.contenedorBotones}
            >

                <TouchableOpacity
                    style={style.botonEliminar}
                    onPress={showAlertEliminar}
                >
                    <Text>Eliminar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.botonModificar}
                    onPress={handleModificar}
                >
                    <Text>Modificar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const style = StyleSheet.create({

    contenedorItem: {
        // borderColor: "#000",
        // borderWidth: 2,
        // padding: 5,
        backgroundColor: "#fff",
        paddingLeft: 13,
        paddingRight: 13,
        margin: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contenedorBotones: {
        // borderColor: "#000",
        // borderWidth: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "56%"
    },
    botonModificar: {
        backgroundColor: "#0A81ED",
        with: "20%",
        padding: 5,
        paddingLeft: 13,
        paddingRight: 13,
    },
    botonEliminar: {
        backgroundColor: "#FE0001",
        with: "20%",
        padding: 5,
        paddingLeft: 13,
        paddingRight: 13,
    },

})

export default ItemRole
