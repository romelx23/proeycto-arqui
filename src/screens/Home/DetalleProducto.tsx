import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { PropsRouteDetalle } from '../../interfaces/home';

const DetalleProducto = ({ route }: PropsRouteDetalle) => {

    const { params } = route;
    const { item } = params;

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
                        source={{ uri: item?.img! }}
                        style={style.imagen}
                    >

                    </Image>
                </View>
            </View>

            <View
            
            style={ style.contenedorDescripcion }
                >

                <Text
                    style={style.titulo1}
                >Precio:</Text>
                <Text
                    style={style.tituloContenido}
                >{item.precio } S/</Text>

                <Text
                    style={style.titulo1}
                >Descripcion:</Text>
                <Text
                    style={style.tituloContenido}
                >
                    {item.descripcion}
                </Text>
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
     /*    borderColor: "yellow",
        borderWidth: 2, */
        backgroundColor: "#A7C4DC",
        height:Dimensions.get('window').height -Dimensions.get('window').height/2.5,

        justifyContent:'center',
        alignItems:'center',
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        paddingTop:25,


    },
    contenedorImagen: {
  /*       borderColor: "red",
        borderWidth: 2, */
        // textAlign: "center",
        width: "auto",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    contenedorDescripcion:{
        padding:10,
        paddingLeft:15,
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

    }

})

// height:Dimensions.get('window').height,
// width:Dimensions.get('window').width,
// justifyContent:'center',
// alignItems:'center',
// position:'absolute',


export default DetalleProducto