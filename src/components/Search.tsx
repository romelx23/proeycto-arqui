import { useTheme } from '@react-navigation/native';
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { ProductosContext } from '../context/ProductosContext';
import { getProductos } from '../helpers/fetch';

const Search = () => {
    const {colors}=useTheme()

    const { productos, setProductos, cargarProductos } =
        useContext<any>(ProductosContext);
    const [search, setSearch] = useState({
        search: ''
    });
    const handleChange = (name: string, value: string) => {
        setSearch({ ...search, [name]: value });
        SearchProduct()
    };
    // console.log(search.search);

    const cargarProducts = async () => {
        try {
            const data = await getProductos();
            setProductos(data.productos);
        } catch (error) {
            console.log(error);
        }
    }
    const SearchProduct = async () => {
        // console.log(search.search);
        try {
            if(search.search.length==0){
                return <></>;
            }
            const buscar = await fetch(`https://node-restserver-cascaron.herokuapp.com/api/buscar/productos/${search.search}`)
            const data = await buscar.json()
            // console.log(data.results.length);
            // if(data.results.length==0){
            //     return (<>
            //         <Text style={{color:'#2f49db'}}>
            //             No hay productos
            //         </Text>
            //     </>)
            // }
            if (search.search.length == 1) {
                cargarProducts()
            }
            setProductos(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        cargarProductos();
    }, [])
    return (
        <View
            style={styles.contenedor}
        >
            <TextInput
                style={{
                    backgroundColor:colors.primary,
                    color:colors.text,
                    ...styles.input}}
                placeholder="Buscar..."
                placeholderTextColor="#ADADAD"
                value={search.search}
                onChangeText={(a) => {
                    handleChange('search', a)
                }}
            />

        </View>
    )
}


const styles = StyleSheet.create({

    contenedor: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },

    input: {
        marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 3,
        borderColor: "#c1c1c3",
        height: 40,
        textAlign: "center",
        padding: 10,
        borderRadius: 15,
        // color: "#000",
    },


})


export default Search
