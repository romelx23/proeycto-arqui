import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FormaItem, PropsHomeItem } from './../interfaces/home'



const Item = ({ item }: PropsHomeItem) => {



    const handleOpenScren = () => {
        console.log("cli")
    }

    return (
        <View
            style={style.contenedorItem}
        >
            <Text>{item.nombre}</Text>
            <Text>{item.precio}</Text>
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
                >
                    +
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    contenedorItem: {
        borderColor: "#000",
        borderWidth: 2,
        flex: 1,
        backgroundColor: "#A7C5DD",
        borderRadius: 30,
        margin: 20,

    },
    contenedorImage: {
        width: 100,
        height: 80,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    botonInfo: {
        borderColor: "yellow",
        borderWidth: 2,
        width: 20,
        borderRadius: 10,
        backgroundColor: "#F5F4F4"
        
    },
    textoBotonInfo: {

    }

})



export default Item
