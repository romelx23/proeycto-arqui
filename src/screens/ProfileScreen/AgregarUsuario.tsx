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

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ImagePicker from 'expo-image-picker'

import { PropsAgregarProducto } from '../../interfaces/home';
import { File, InterfaceImagePicker, InterfaceRespuestaCloudinary, InterfaceStateImage, Producto } from '../../interfaces/producto';
// import { useForm } from '../../hook/useForm';
import { TextArea } from '../../components/TextArea';
import { saveProducto } from '../../helpers/fetch';
import { ProductosContext } from '../../context/ProductosContext';

const AgregarUsuario = ({ navigation }: PropsAgregarProducto) => {

    const { cargarProductos } = useContext<any>(ProductosContext)

    const [imageSelected, setImageSelected] = useState<InterfaceStateImage>({
        localUri: ''
    });
    const [producto, setProducto] = useState({
        disponible: true,
        nombre: "",
        descripcion: "",
        categoria: "61a7933a3daea00016e4f7cd",
        img: "",
        precio: ""
    })

    const handleChange = (name: string, value: string) => setProducto({ ...producto, [name]: value });


    const leerAsynStorege = async () => {

        // await AsyncStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTI2YjMzOWY0NGI5MjAwMTZiNjMxYjAiLCJpYXQiOjE2Mzg3MTgzMDAsImV4cCI6MTYzODc2MTUwMH0.pV77O_8jbwSIE0SRj2q-Vsmrw_tErfR6zCMBCepQnjk")

    }

    useEffect(() => {

        leerAsynStorege();

    }, [])

    const handleCargarImagen = async () => {

        const resultadosPermiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
        formData.append('file', JSON.parse(JSON.stringify(photo)));

        const data_image = await fetch(url, {
            method: 'POST',
            body: formData,
        })
        const paser: InterfaceRespuestaCloudinary = await data_image.json();

        const newProducto = await saveProducto(producto, paser.secure_url);

        await cargarProductos();

        // console.log(navigation);

        navigation.navigate('HomeTab')

    }

    return (
        <ScrollView>
            <View
                style={style.contenedorAgregar}
            >
                <Text>Nombre del Usuario</Text>
                <TextInput
                    style={style.input}
                    placeholder="Nombre del producto"
                    placeholderTextColor="#ADADAD"
                    value={producto.nombre}
                    onChangeText={(a) => handleChange("nombre", a)}
                >

                </TextInput>

                <Text>Correo del Usuario</Text>
                <TextInput
                    style={style.input}
                    placeholder="Ingrese su correo"
                    placeholderTextColor="#ADADAD"
                    value={producto.precio.toString()}
                    onChangeText={(a) => handleChange("precio", a)}
                >

                </TextInput>

                <Text>Password del Usuario</Text>
                <View
                    style={{
                        backgroundColor: "#fff",
                        // borderWidth: 2,
                        // borderColor: "yellow",
                    }}>
                    <TextInput
                        style={style.input}
                        placeholder="Ingrese su contraseña"
                        placeholderTextColor="#ADADAD"
                        keyboardType="visible-password"
                        value={producto.precio.toString()}
                        onChangeText={(a) => handleChange("precio", a)}
                    ></TextInput>
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
        </ScrollView>
    )
}

const style = StyleSheet.create({

    contenedorAgregar: {
        padding: 15,
        // flex: 1,
        paddingBottom: 100
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
        width: '100%',
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


export default AgregarUsuario