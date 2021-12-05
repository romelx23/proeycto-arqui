import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker'

import { PropsAgregarProducto } from '../../interfaces/home';
import { File, InterfaceImagePicker, InterfaceRespuestaCloudinary, InterfaceStateImage, Producto } from '../../interfaces/producto';
// import { useForm } from '../../hook/useForm';
import { TextArea } from '../../components/TextArea';
import { saveProducto } from '../../helps/fetch';
import { ProductosContext } from '../../context/ProductosContext';


const AgregarProducto = ({ navigation, route }: PropsAgregarProducto) => {

    const {productos , setProductos,cargarProductos} = useContext<any>(ProductosContext)


    const [imageSelected, setImageSelected] = useState<InterfaceStateImage>({});
    const [producto, setProducto] = useState({
        precio: "",
        disponible: true,
        nombre: "",
        descripcion: "",
        categoria: "61a7933a3daea00016e4f7cd",
        img: "",
    })

    const handleChange = (name: string, value: string) => setProducto({ ...producto, [name]: value });


    const leerAsynStorege = async () => {

        // await AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTI2YjMzOWY0NGI5MjAwMTZiNjMxYjAiLCJpYXQiOjE2Mzg3MTgzMDAsImV4cCI6MTYzODc2MTUwMH0.pV77O_8jbwSIE0SRj2q-Vsmrw_tErfR6zCMBCepQnjk")

    }

    useEffect(() => {

        leerAsynStorege();

    }, [])

    const handleCargarImagen = async () => {

        let resultadosPermiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (resultadosPermiso.granted === false) {
            alert('Permiso de la camara requeridos');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync()
        if (pickerResult.cancelled) {
            return;
        }

        setImageSelected({ localUri: pickerResult.uri })

    }

    const handleSubmit = async () => {
    

        const photo = {
            uri: imageSelected.localUri,
            type: `test/${imageSelected.localUri?.split(".")[1]}`,
            name: `test/${imageSelected.localUri?.split(".")[1]}`,
        };

        const url = "https://api.cloudinary.com/v1_1/dbrnlddba/upload"

        const formData = new FormData();
        formData.append('upload_preset', "nutrifit");
        formData.append('file',JSON.parse(JSON.stringify(photo)));

        const data_image = await fetch(url, {
            method: 'POST',
            body: formData,
        })
        const paser: InterfaceRespuestaCloudinary = await data_image.json();
      
        const newProducto = await saveProducto(producto, paser.secure_url);

       await cargarProductos();

        navigation?.navigate!('home')

    }

    return (
        <View
            style={style.contenedorAgregar}
        >
            <Text>Nombre del producto</Text>
            <TextInput
                style={style.input}
                placeholder="Nombre del producto"
                placeholderTextColor="#ADADAD"
                value={producto.nombre}
                onChangeText={(a) => handleChange("nombre", a)}
            >

            </TextInput>

            <Text>Precio del producto</Text>
            <TextInput
                style={style.input}
                placeholder="Precio..."
                placeholderTextColor="#ADADAD"
                keyboardType="number-pad"
                value={producto.precio}
                onChangeText={(a) => handleChange("precio", a)}
            >

            </TextInput>

            <Text>Precio del producto</Text>
            <View
                style={{
                    backgroundColor: "#fff",
                    // borderWidth: 2,
                    // borderColor: "yellow",
                }}>

                <TextArea
                    multiline
                    numberOfLines={4}
                    value={producto.descripcion}
                    onChangeText={(a: string) => handleChange("descripcion", a)}
                    style={{ padding: 10 }}
                />
            </View>

            <View
                style={style.contenedorBuscarImagen}
            >
                <TouchableOpacity
                    onPress={handleCargarImagen}
                    style={style.buttonBuscarImage}
                >
                    <Text
                        style={style.TextButonBuscarImagen}
                    >
                        Buscar Imagen...
                    </Text>
                </TouchableOpacity>
                <Image
                    style={style.imagen}
                    source={{
                        uri:
                            !imageSelected.localUri
                                ? "https://via.placeholder.com/200"
                                : imageSelected.localUri
                    }}
                >
                </Image>
            </View>



            <TouchableOpacity
                style={style.buttonSave}
                onPress={handleSubmit}>
                <Text
                    style={style.buttonSaveText}
                >
                    Agregar Producto
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({

    contenedorAgregar: {
        /*     borderWidth: 1,
            borderColor: "red", */
        padding: 15,
        flex: 1,
        width: Dimensions.get('window').width

    },

    buttonSave: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
        marginBottom: 3,
        marginTop: 6,
        backgroundColor: "#10ac84",
        width: "100%",
    },
    buttonSaveText: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        textTransform: "uppercase",
    },
    contenedorBuscarImagen: {

        width: Dimensions.get("screen").width - 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "green",
    },
    imagen: {
        width: 200,
        height: 200,
    },
    buttonBuscarImage: {
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 8,
        marginBottom: 3,
        marginTop: 6,
        backgroundColor: "#A7C4DC",
        width: "100%",
    },
    TextButonBuscarImagen: {
        color: "#fff",
        fontWeight: "700",
        textAlign: "center",
        textTransform: "uppercase",
    },

    input: {
        width: "100%",
        marginBottom: 7,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#fff",
        height: 40,
        color: "#000",
        textAlign: "center",
        padding: 10,
        borderRadius: 8,
        backgroundColor: "#fff"
    },
})


export default AgregarProducto
