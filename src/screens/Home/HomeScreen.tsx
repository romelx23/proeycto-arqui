import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from '../../components/ListItem'
import Search from '../../components/Search'
import { PropsNavigationHome } from '../../interfaces/home'

const HomeScreen = ({navigation} : PropsNavigationHome) => {
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
