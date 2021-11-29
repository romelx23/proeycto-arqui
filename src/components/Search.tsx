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

        margin: 20,
        padding: 10,

    },

    input: {
        width: "90%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 3,
        borderColor: "#EBECF1",
        height: 30,
        color: "#000",
        textAlign: "center",
        padding: 15,
        borderRadius: 15,
    },

  
})


export default Search
