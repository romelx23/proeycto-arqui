import React from 'react'
import { View, Text, StyleSheet,FlatList, Platform } from 'react-native'
import Item from './Item'
import { FormaItem, PropsNavigationHome } from './../interfaces/home'



const ListItem = ({navigation}: PropsNavigationHome) => {

    const listaItem : FormaItem[] = [
        {
            id: 1,
            nombre:"Sensor para medir el agua",
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

    ]


    return (

        <FlatList
            style={ style.contenedor }
            data={listaItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemons) => pokemons.id.toString()}
            renderItem={({ item }) => <Item item={item} navigation={navigation}/>}
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

    )
}



const style = StyleSheet.create({

    contenedor:{
       
    },
    flagListContentContainer : {
      /*   borderWidth: 2,
        borderColor: "green", */
        margin:0,
        padding:0,
        // paddingHorizontal: 5,
        // marginTop: Platform.OS === "android" ? 30 : 0,
        
    },
    


})


export default ListItem
