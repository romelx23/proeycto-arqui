import React, { useEffect, useState } from 'react'
import { 
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Dimensions,
 } from 'react-native'

import { Icon } from "react-native-elements"

import Item from './Item'
import { getProductos } from '../helps/fetch'

import { FormaItem, PropsNavigationHome } from './../interfaces/home'
import { Productos, Producto }  from './../interfaces/producto'

const ListItem = ({navigation}: PropsNavigationHome) => {

    const listaItem : FormaItem[] = [
        {
            id: 1,
            nombre:"Sensor ",
            precio: "18",
            Oferta: true,
            imagen:"https://asistentegoogle.com/wp-content/uploads/2019/08/google.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 2,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://asistentegoogle.com/wp-content/uploads/2019/08/google.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 3,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 4,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://m.media-amazon.com/images/I/41-v1fozy0L._AC_SY400_.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 5,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 5,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 5,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 5,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
        {
            id: 5,
            nombre:"Pablito del estado",
            precio: "18",
            Oferta: true,
            imagen:"https://i.blogs.es/937f55/amazon-echo-1/450_1000.jpg",
            descripcion:"Lorem15 esta es una descripcion del dispositivo en esta se tendra quie poner cositas que luego ayuden al cliente"
        },
    ]

    const [productos2 , setProductos] = useState<Producto[]>();

    useEffect(() => {

        cargarProductos();

    }, [])


    const cargarProductos = async () => {
        const data : Productos = await getProductos();
        setProductos(data.productos)
        console.log("Data productos",data.productos);
        console.log("Hola productos2",productos2);
    }

    const handleAgregarProducto = () =>{
        console.log("agrego algo")
        navigation?.navigate!('agregarPorducto')
    }

console.log("set productos",productos2);

    return (
        <View
        
            style={style.contenedorBotonFlatList}
        >
        
            <FlatList
                style={ style.contenedor }
                data={productos2}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemons) => pokemons._id.toString()}
                renderItem={({ item }) => <Item item  ={item} navigation={navigation}/>}
                contentContainerStyle={style.flagListContentContainer}
                // onEndReached={isNext ? loadMore : null}
                // onEndReachedThreshold={0.1}
                // ListFooterComponent={
                    // isNext ? (
                //     <ActivityIndicator
                //     size="large"
                //     color="#AEAEAE"
                //     style={style.spinner}
                //     />
                // ) : null
                // }
            />
            <TouchableOpacity
                style={ style.botonAgregar }
                onPress= { handleAgregarProducto }
            >
                <Icon
                    type="material-community"
                    name="plus"
                    color="#000"
                    size={26}
                >
                    
                </Icon>
              
            </TouchableOpacity>

        
        </View>

    )
}


//726 -573
const style = StyleSheet.create({

    contenedorBotonFlatList:{
    },
    contenedor:{
       
    },
    flagListContentContainer : {
        // borderWidth: 2,
        // borderColor: "green",
        height:Dimensions.get('window').height -153,
        
    },
    botonAgregar:{
        width: 60,
        height:60,
        alignItems: "center",
        backgroundColor: "red",
        padding: 1,
        borderRadius: 40,
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowOffset: {  width:1, height: 1,},
        justifyContent: "center",
        alignContent: "center",
    }
    


})


export default ListItem
