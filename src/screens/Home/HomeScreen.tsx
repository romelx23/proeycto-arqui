import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'

const HomeScreen = () => {
    return (
        <View
            style={ style.contenedor }
        >
            <Search></Search>
            <ListItem/>
        </View>
    )
}

const style = StyleSheet.create({
    contenedor: {
        padding:40,
        borderColor: "red",
        borderWidth: 2,
        flex:1,
    }
})

export default HomeScreen
