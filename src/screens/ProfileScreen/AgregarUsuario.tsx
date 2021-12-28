import React, { useState, useEffect, useContext } from 'react'
import {
    View,
    Text,
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';

import { PropsAgregarProducto } from '../../interfaces/home';
import { useTheme } from '@react-navigation/native';



import {Picker} from '@react-native-picker/picker';
import { getRoles } from '../../helpers/fetchRole';
import { crearUsuarioConRol } from '../../helpers/fetchImageUser';
import { showContext } from '../../context/ShowMessage';


const AgregarUsuario = ({ navigation }: PropsAgregarProducto) => {
    const { colors } = useTheme();

  const { load, setLoad } = useContext(showContext);


    const [user, setUser] = useState({
        nombre:"",
        correo: "",
        password : "",
        rol: "USER_ROLE",
        img: "https://icon-library.com/images/icon-avatar/icon-avatar-1.jpg"
    })
    const [nuevoRol, setNuevoRol] = useState("")
    const [listaRoles, setListaRoles] = useState([])

    useEffect(() => {
        obtenerRoles();
        
    }, [])

    const obtenerRoles = async () =>{

        const {roles} = await getRoles()
        setListaRoles( roles );

    }

    const handleChange = (name: string, value: string) => setUser({ ...user, [name]: value });




    const showAlert = (mensaje: string) =>
    Alert.alert(
      "Datos no validos",
      mensaje,
      [
        {
          text: "Aceptar",
          onPress: () => {
            console.log("Preciono Aceptar");
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log("preciono otro lado que no es el alert");
        },
      }
    );

    const handleSubmit = async () => {

        const usuario = await crearUsuarioConRol(user)
    
        if (usuario.usuario?.uid) {
            navigation.goBack();
        } else {
            showAlert(usuario.errors[0].msg);
        }
    }

    return (
        <ScrollView>
            <View
                style={style.contenedorAgregar}
            >
                <Text style={{color:colors.text}}>Nombre del Usuario</Text>
                <TextInput
                    style={style.input}
                    placeholder="Nombre del producto"
                    placeholderTextColor="#ADADAD"
                    // value={user.nombre}
                    onChangeText={(a) => handleChange("nombre", a)}
                >

                </TextInput>

                <Text style={{color:colors.text}}>Correo del Usuario</Text>
                <TextInput
                    style={style.input}
                    placeholder="Ingrese su correo"
                    placeholderTextColor="#ADADAD"
                    // value={user.correo}
                    onChangeText={(a) => handleChange("correo", a)}
                >

                </TextInput>

                <Text style={{color:colors.text}}>Password del Usuario</Text>
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
                        // keyboardType="visible-password"
                        secureTextEntry={true}
                        // value={user.password}
                        onChangeText={(a) => handleChange("password", a)}
                    ></TextInput>
                </View>

                <Picker
                style={ style.contenedorPiker }
                    selectedValue={nuevoRol}
                    onValueChange={(itemValue, itemIndex) =>{
                        setNuevoRol(itemValue)
                       setUser( {...user, rol: itemValue }  )
                    }}>
                    {
                        listaRoles.map( (role : any, index)=>
                            <Picker.Item key={role._id} label={role.rol} value={role.rol} />
                         )
                    }
                </Picker>


                <TouchableOpacity
                    style={style.buttonSave}
                    onPress={handleSubmit}>
                    <Text
                        style={style.buttonSaveText}
                    >
                        Agregar Usuario
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

    contenedorPiker : {
        backgroundColor: "#fff",
        width: "100%",
        marginTop: 10,
        marginBottom: 10,
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
