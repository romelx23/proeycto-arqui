import React, { useContext, useEffect } from 'react'
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import { RoleContext } from '../context/RoleContext';
import { PropsNavigationHome } from '../interfaces/home';
import ItemRole from './ItemRole';
import { useTheme } from '@react-navigation/native';

const ListRole = () => {
    const { colors } = useTheme();

    const {roles, getRoles2 } = useContext(RoleContext)
    const navigation = useNavigation();
    
    useEffect(() => {
        getRoles2();
      
    }, [])

    const handleAgregarRole = ()=>{
        navigation.navigate("agregarRole")
    }

    return (
        <View
            style= {{flex:1}}
        >

        <FlatList
        style={ {backgroundColor:colors.background,...style.contenedorListItem} }
        data={roles}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(rol) => rol?._id!.toString()}
        renderItem={( {item} ) => <ItemRole  item={item}/>}
        
        />
         <TouchableOpacity
                style={style.botonAgregar}
                onPress={handleAgregarRole}
            >
                <Icon
                    type="material-community"
                    name="plus"
                    color="#fff"
                    size={26}
                >

                </Icon>

            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({

    contenedorListItem: {
        flex: 1,
        borderColor: "#000",
        borderWidth: 2,
        padding:10,
    },
    botonAgregar: {
        width: 60,
        height: 60,
        alignItems: "center",
        backgroundColor: "#0C8BF0",
        padding: 1,
        borderRadius: 40,
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowOffset: { width: 1, height: 1 },
        justifyContent: "center",
        alignContent: "center",
      },

})

export default ListRole
