import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { user, userReq } from '../interfaces/user';
import UserItem from './UserItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListUser() {
    const [user, setUser] = useState<user[]>();

    const getUsers = async () => {
        const resp = await fetch('https://node-restserver-cascaron.herokuapp.com/api/usuarios?limit=10', {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        const data:userReq = await resp.json();
        console.log(data);
        setUser(data.usuario)
    }

    useEffect(() => {
        getUsers()
    }, [])

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
                renderItem={({ item }) => <UserItem item={item} />}
            />
        </View>
    )
}

const style = StyleSheet.create({

    contenedorBotonFlatList: {
        flex: 1,
        padding: 20,
        backgroundColor: '#47abee',
        paddingBottom:80,
    },
    contenedor: {

    },
})