import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { getVerificarUsuario, Resgistrar } from "../../helpers/fetch";
import { PropsRegisterScreen } from "../../interfaces/login";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageIndicator from "../../components/MessageIndicator";
import { showContext } from "../../context/ShowMessage";
// import AnimatedLottieView from "lottie-react-native";
import { AuthContext } from "../../context/AuthContext";

// import logo from '../../assets/tech.png';

const ruta = `../assets/tech.png`;

const RegisterScreen = ({ navigation }: PropsRegisterScreen) => {

  const { auth,setAuth,rol,setRol } = useContext(AuthContext);

  useEffect(() => {
    usuarioLogeado();
  }, []);


  const usuarioLogeado = async ()  =>{
    if(auth.logged){
        navigation.replace("home");
    }
  }

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

  const [user, setUser] = useState({
    nombre: "",
    edad: "",
    correo: "",
    password: "",
    password2: "",
    rol: "USER_ROLE",
    img:'https://icon-library.com/images/icon-avatar/icon-avatar-1.jpg'
  });
  const [editing, setEditing] = useState(false);
  const { load, setLoad } = useContext(showContext);

  const handleChange = (name: string, value: string) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async () => {
    if (user.password !== user.password2) {
      return showAlert("Las contraseñas no son iguales");
    }
    setLoad(true)
    try {
      const a = await Resgistrar(user);
      const {usuario}=a
      console.log(usuario);
      setLoad(false)
      if (a.usuario?.uid) {
        await AsyncStorage.setItem("token", a.token);
        console.log("tiene uID");
        console.log(a.token);
        setAuth({...a.usuario, logged: true})
        setRol(a.usuario.rol)
        navigation.replace("home")

      } else {
        console.log("usuario no creado");
        console.log(a.errors[0].msg);

        showAlert(a.errors[0].msg);
      }
    } catch (error) {
      console.log("Error en TRYcATCH, rEGISTER", error);
    }
  };

  return (
    <View style={styles.contenedor}>
    <MessageIndicator loading={load} />
      <View
        style={{
          width: "100%",
          height: 260,
          display: 'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Image
          source={{
            uri: "https://lvivity.com/wp-content/uploads/2019/12/uiux-design.png",
          }}
          style={{ height: 200, width: 200 }}
        />
        {/* <AnimatedLottieView
          style={{ width: 200, height: 200 }}
          source={require("../../animation/animation.json")}
          autoPlay
          loop
        /> */}
        <Text style={styles.appTitulo}>Teca App</Text>
      </View>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#576574"
        value={user.nombre}
        onChangeText={(text) => handleChange("nombre", text)}
      />
      <Text>Edad:</Text>
      <TextInput
        style={styles.input}
        // autoComplete="cc-number"
        keyboardType="number-pad"
        placeholder="Edad"
        placeholderTextColor="#576574"
        value={user.edad}
        onChangeText={(text) => handleChange("edad", text)}
      />

      <Text>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        keyboardType="email-address"
        placeholderTextColor="#576574"
        value={user.correo}
        onChangeText={(text) => handleChange("correo", text)}
      />

      <Text style={styles.labelTitulo}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="contraseña"
        placeholderTextColor="#576574"
        value={user.password}
        onChangeText={(text) => handleChange("password", text)}
      />

      <Text>Vuelva escribir contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="contraseña"
        placeholderTextColor="#576574"
        value={user.password2}
        onChangeText={(text) => handleChange("password2", text)}
      />

      {/* <Text>Rol:</Text> 
                 <TextInput
                    style={styles.input}
                    placeholder="Rol"
                    placeholderTextColor="#576574"
                    value={user.rol}
                    onChangeText={(text) => handleChange("rol", text)}
                /> */}

      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#A7C5DD",
  },
  input: {
    width: "100%",
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: "#fff",
    height: 30,
    color: "#000",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "100%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  labelTitulo: {
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 4,
  },
  appTitulo: {
    fontWeight: "500",
    fontSize: 35,
    marginBottom: 4,
    color: "#fff",
  },
});

export default RegisterScreen;
