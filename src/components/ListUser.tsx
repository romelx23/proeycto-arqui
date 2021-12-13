import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { user, userReq } from '../interfaces/user';
import UserItem from './UserItem';
import { Icon } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { PropsNavigationHome } from "./../interfaces/home";
export default function ListUser({navigation}:PropsNavigationHome) {
    const [user, setUser] = useState<user[]>();

    const getUsers = async () => {
        const resp = await fetch('https://node-restserver-cascaron.herokuapp.com/api/usuarios?limit=10', {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        const data: userReq = await resp.json();
        console.log(data);
        setUser(data.usuario)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const agregarUsuario=()=>{
        console.log('agregar usuario');
        navigation.navigate("agregarUsuario");
    }
    return (
        <View
            style={style.contenedorBotonFlatList}
        >

            <FlatList
                style={{ flex: 1 }}
                data={user}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(user) => user.uid}
                renderItem={({ item }) => <UserItem item={item} navigation={navigation}/>}
            />
            <TouchableOpacity
                style={style.botonAgregar}
                onPress={agregarUsuario}
            >
                <Icon
                    type="material-community"
                    name="plus"
                    color="#fff"
                    size={26}
                ></Icon>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({

    contenedorBotonFlatList: {
        flex: 1,
        padding: 20,
        paddingBottom: 80,
    },
    botonAgregar: {
        width: 60,
        height: 60,
        alignItems: "center",
        backgroundColor: "#0C8BF0",
        padding: 1,
        borderRadius: 40,
        position: "absolute",
        bottom: 20,
        right: 20,
        shadowOffset: { width: 1, height: 1 },
        justifyContent: "center",
        alignContent: "center",
    },
})