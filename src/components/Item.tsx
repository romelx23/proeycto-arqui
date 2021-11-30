import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { FormaItem, PropsHomeItem } from './../interfaces/home'



const Item = ({ item, navigation }: any) => {



    const handleOpenScren = () => {
        console.log(navigation)


        navigation?.navigate!('detalleProducto', { item })


    }


    return (
        <View
            style={style.contenedorItem}
        >
            <Text
                style={style.nombre}
            >{item.nombre}</Text>
            {/* <Text
                style={style.precio} 
            >{item.precio} S/</Text> */}

            <View
                style={style.contenedorImagenBoton}
            >

                <Image
                    source={{ uri: item.imagen }}
                    style={style.contenedorImage}
                ></Image>


                <TouchableOpacity
                    style={style.botonInfo}
                    onPress={handleOpenScren}
                >
                    <Text
                        style={style.textoBotonInfo}
                    >+</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    contenedorItem: {
        /* borderColor: "orange",
        borderWidth: 2, */
        flex: 1,
        backgroundColor: "#A7C5DD",
        borderRadius: 20,
        margin:10,
        marginEnd: 7,
        marginStart: 7,
        padding:7,
        justifyContent: "center",
        alignItems: "center"

    },
    contenedorImagenBoton:{
      /*   borderColor: "orange",
        borderWidth: 2, */
        width:100,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    contenedorImage: {
        width: 80 ,
        height: 80 ,
        borderRadius:9,
        //todo: Comentar la linea de abajo para que veas la majia en la lista de productos
        resizeMode: 'contain'

       
    },
    botonInfo: {
     /*    borderColor: "yellow",
        borderWidth: 2, */
        width: 20,
        height:20,
        borderRadius: 10,
        backgroundColor: "#F5F4F4",
        marginLeft: 11,

    },
    textoBotonInfo: {

    },
    nombre: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        fontWeight: "500",
        paddingEnd: 5,
        paddingStart:5,
        marginBottom: 6,
    },
    precio: {

    },

})



export default Item
