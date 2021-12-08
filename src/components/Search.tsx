import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const Search = () => {

    return (
        <View
            style={styles.contenedor}

        >
            <TextInput
                style={styles.input}
                placeholder="Buscar..."
                placeholderTextColor="#ADADAD"
            />
          
        </View>
    )
}


const styles = StyleSheet.create({

    contenedor: {
        width:'100%',
        justifyContent:'center',
        alignContent:'center'
    },

    input: {
        margin: 20,
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 3,
        borderColor: "#EBECF1",
        height: 40,
        color: "#000",
        textAlign: "center",
        padding: 10,
        borderRadius: 15,
    },

  
})


export default Search
