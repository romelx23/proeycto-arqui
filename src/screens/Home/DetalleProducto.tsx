import React, { useContext, useState } from 'react'
import { Modal, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { PropsRouteDetalle } from '../../interfaces/home';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { deleteProducto } from '../../helpers/fetch';
import { ProductosContext } from '../../context/ProductosContext';


const DetalleProducto = ({ route, navigation }: PropsRouteDetalle) => {
    const { params } = route;
    const { item } = params;
    console.log(item._id);
    const { cargarProductos } = useContext<any>(ProductosContext)
    const changeScreen = () => {
        navigation.navigate('actualizarPorducto', { item: item })
    }

    const showMessage = () => {
        Alert.alert(
            'Mensaje del Sistema',
            '¿Estas seguro de querer eliminar el Producto?',
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        deleteProducto(item._id)
                        cargarProductos()
                        navigation.navigate('home')
                        console.log("OK Pressed")
                    }
                }
            ]
        )
    }

    return (
        <View
            style={style.contenedorDetalle}
        >
            <View
                style={style.contenedorImageTitulo}
            >

                <Text
                    style={style.nombreProducto}
                >
                    {item.nombre}
                </Text>

                <View
                    style={style.contenedorImagen}
                >
                    <Image
                        source={{ uri: item.img! }}
                        style={style.imagen}
                    >

                    </Image>
                </View>
            </View>

            <View
                style={style.contenedorDescripcion}
            >

                <Text
                    style={style.titulo1}
                >Precio: </Text>
                <Text
                    style={style.tituloContenido}
                >S/.{item.precio}</Text>

                <Text
                    style={style.titulo1}
                >Descripcion: </Text>
                <Text
                    style={style.tituloContenido}
                >
                    {item.descripcion}
                </Text>
                <View>
                    <Text style={style.titulo1}>
                        Acciones:
                    </Text>
                </View>
            </View>
            <View style={style.containerButtons}>
                <TouchableOpacity
                    onPress={showMessage}
                    activeOpacity={0.1}
                    style={style.buttonDelete} >
                    <View style={style.contentButton} >
                        <Text style={style.text}>Delete</Text>
                        <FontAwesome
                            name="trash-alt"
                            color={'#fff'}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={changeScreen}
                    activeOpacity={0.1}
                    style={style.buttonUpdate}>
                    <View style={style.contentButton}>
                        <Text style={style.text}>Update</Text>
                        <FontAwesome
                            name="pencil-alt"
                            color={'#fff'}
                            size={20}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    contenedorDetalle: {
        /*       borderColor: "red",
              borderWidth: 2, */
        flex: 1,
    },
    contenedorImageTitulo: {
        backgroundColor: "#A7C4DC",
        height: Dimensions.get('window').height - Dimensions.get('window').height / 2.5,

        justifyContent: 'center',
        alignItems: 'center',
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        paddingTop: 25,
    },
    contenedorImagen: {
        width: "auto",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    contenedorDescripcion: {
        flex: 1,
        justifyContent: 'space-around',
        padding: 10,
        paddingLeft: 15,
    },
    imagen: {
        // flex: 1,
        width: 300,
        height: 350,
        resizeMode: 'contain'
    },
    nombreProducto: {
        color: "#fff",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "300",
        padding: 10

    },
    titulo1: {
        fontWeight: '700',

    },
    tituloContenido: {

    },
    containerButtons: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    contentButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonDelete: {
        width: 100,
        height: 60,
        backgroundColor: '#cc382b',
        borderRadius: 10,
    },
    buttonUpdate: {
        width: 100,
        height: 60,
        backgroundColor: '#2685c5',
        borderRadius: 10,
    },
    text: {
        color: '#fff'
    }
})

// height:Dimensions.get('window').height,
// width:Dimensions.get('window').width,
// justifyContent:'center',
// alignItems:'center',
// position:'absolute',


export default DetalleProducto
