import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'
import { PropsNavigationHome } from '../../interfaces/home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getVerificarUsuario } from '../../helpers/fetch'

const HomeScreen = ({ navigation }: PropsNavigationHome) => {

    useEffect(() => {
        verificarUsuario();
    }, [])

    const verificarUsuario = async () => {

        const respVerificarToquen = await getVerificarUsuario();
        
        if(!!respVerificarToquen.token){
            return ;
        }else{
            await AsyncStorage.setItem("token", respVerificarToquen.token)
            navigation.replace!("login");
        }

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
