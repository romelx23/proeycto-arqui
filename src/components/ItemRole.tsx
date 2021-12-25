import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { RoleContext } from '../context/RoleContext'
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native';
import { EliminarRole } from '../helpers/fetchRole';
import { showContext } from '../context/ShowMessage';
import MessageIndicator from './MessageIndicator';
import { useTheme } from '@react-navigation/native';

const ItemRole = ({ item }: any) => {
    const { colors } = useTheme();
    // console.log(item)
    const navigation = useNavigation();

    const { getRoles2 } = useContext(RoleContext)

    const showAlertEliminar = () => {
        Alert.alert(
            "Eliminar Rol",
            "¿Seguro que quiere eliminar el rol?",
            [
                {
                    text: "Cancelar",
                    onPress: () => {
                        console.log("Presiono Cancelar");
                    },
                    style: "destructive",
                },{
                    text: "Aceptar",
                    onPress: () => {
                        handleEliminar()
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
        navigation.navigate("modificarRole", { item })
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
            style={{backgroundColor:colors.background,...style.contenedorItem}}
        >

            <Text style={{color:colors.text}}>{item.rol}</Text>

            <View
                style={style.contenedorBotones}
            >

                <TouchableOpacity
                    style={style.botonEliminar}
                    onPress={showAlertEliminar}
                >
                    <Text style={{color:colors.text}}>Eliminar</Text>
                    <FontAwesome
                        name="trash"
                        color={"#ffffff"} size={30} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.botonModificar}
                    onPress={handleModificar}
                >
                    <Text style={{color:colors.text}}>Modificar</Text>
                    <FontAwesome
                        name="edit"
                        color={"#ffffff"} size={30} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

const style = StyleSheet.create({

    contenedorItem: {
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
        padding: 5,
        paddingLeft: 13,
        paddingRight: 13,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    botonEliminar: {
        backgroundColor: "#FE0001",
        padding: 5,
        paddingLeft: 13,
        paddingRight: 13,
        justifyContent:'center',
        alignItems:'center',
        marginRight:10,
        borderRadius:10
    },

})

export default ItemRole
