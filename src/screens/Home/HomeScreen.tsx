import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'
import { PropsNavigationHome } from '../../interfaces/home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getVerificarUsuario } from '../../helpers/fetch'
import { Layout } from '../../components/Layout'
import { AuthContext } from '../../context/AuthContext'

const HomeScreen = ({ navigation }: PropsNavigationHome) => {

    const { auth,setAuth,setRol } = useContext(AuthContext);

    useEffect(() => {
        usuarioLogeado();
    }, [])

    const usuarioLogeado = async ()  =>{
        if(!auth.logged){
            navigation.replace("login");
        }
    }

  
// conejita playboy
    const verificarUsuario = async () => {

        const respVerificarToquen = await getVerificarUsuario();

        console.log("verificar usuario",respVerificarToquen);
        
        // if(respVerificarToquen.token){
        //     console.log("respuesta del verificar ",respVerificarToquen.token)

        //     await AsyncStorage.setItem("token", respVerificarToquen.token)
        // }else{
        //     await AsyncStorage.clear();
        //     navigation.replace!("login");
        // }

    }

    return (
        <View
        style={style.contenedor}
        >
            <Search></Search>
            <ListItem navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        // backgroundColor:'#4f6ba7',
        padding: 10,
        flex: 1,
    }
})

export default HomeScreen
