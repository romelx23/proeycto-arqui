import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'
import { PropsNavigationHome } from '../../interfaces/home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getVerificarUsuario } from '../../helps/fetch'

const HomeScreen = ({navigation} : PropsNavigationHome) => {

    
    useEffect(() => {
        

        verificarUsuario();
        
    }, [])
    
    

    const verificarUsuario = async ()=>{

        const token = await AsyncStorage.getItem("@token_key") || "";
        const respVerificarToquen = await getVerificarUsuario(token);

        console.log("home", respVerificarToquen)

    }

    return (
        <View
            style={ style.contenedor }
        >
            <Search></Search>
            <ListItem navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        // borderColor: "red",
        // borderWidth: 2,
        padding:10,
        flex:1,
    }
})

export default HomeScreen
