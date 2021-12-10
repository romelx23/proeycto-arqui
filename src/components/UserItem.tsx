import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { user } from '../interfaces/user'

interface Props {
    item: user
}

export default function UserItem({ item }: Props) {
    return (
        <View style={style.cardUser}>
            <View>
                <Text>{item.nombre}</Text>
                <Text>{item.correo}</Text>
                <Text>{item.rol}</Text>
            </View>
            <Image
                width={100}
                height={100}
                source={{ uri: (item.img) ? item.img : "https://via.placeholder.com/200" }}
            ></Image>
        </View>
    )
}


const style = StyleSheet.create({

    cardUser: {
        flex: 1,
        flexDirection:'row',
        padding: 20,
        backgroundColor: '#47abee',
        borderBottomColor: '#222',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 20

    },
})