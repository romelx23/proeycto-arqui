import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';

import ListRole from "./../../components/ListRole"

const Role = () => {
    return (
        <View
            style={ style.contenedorRole }
        >
           
           <ListRole ></ListRole>
        </View>
    )
}

const style = StyleSheet.create({
    contenedorRole: {
        flex:1,
        borderWidth: 2,
    }
})


export default Role
