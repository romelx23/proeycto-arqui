import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  * as  Google  from 'expo-google-app-auth';



import { getVerificarUsuario, login, loginGoogle } from "../../helpers/fetch";
import { PropsLoginScreen } from "../../interfaces/login";
import MessageIndicator from "../../components/MessageIndicator";
import { showContext } from "../../context/ShowMessage";
// import LottieView from "lottie-react-native";
import { AuthContext } from "../../context/AuthContext";
import AnimatedLottieView from "lottie-react-native";
// import * as Google from 'expo-google-app-auth';


interface RespuestaDeGoogleProps {
  accessToken: string,
  idToken: string,
  refreshToken: string,
  type : string,
  user: {
    email: string,
    familyname: string,
    givenName: string,
    id: string,
    name: string,
    photoUrl: string
  }
}

const LoginScreen = ({ navigation }: PropsLoginScreen) => {
  // const [load, setLoad] = useState(false);
  const { load, setLoad } = useContext(showContext);
  const { auth,setAuth,setRol } = useContext(AuthContext);
  useEffect(() => {
    // verificarUsuario();
  }, []);

  const [user, setUser] = useState({
    correo: "Carlos@gmail.com",
    password: "123456",
  });

  const verificarUsuario = async () => {
    const respVerificarToquen = await getVerificarUsuario();
    if (!respVerificarToquen.token) {
      return;
    } else {
      await AsyncStorage.setItem("token", respVerificarToquen.token);
      navigation.navigate("home");
    }
  };

  // const handleGoogleSignin = async () => {
  //   const config={
  //     clientId: '938419071147-dapv5gtn2o7je09moihlgdlopj811fqj.apps.googleusercontent.com',
  //     androidClientId:'938419071147-dapv5gtn2o7je09moihlgdlopj811fqj.apps.googleusercontent.com',
  //     scopes:['profile','email']
  //   }
  //   Google.logInAsync(config)
  //   .then((result)=>{
  //     const {type,user}=result;
  //     if(type=="success"){
  //       const {email,name,photoUrl}=user;
  //       Alert.alert('Google signin Exitoso','success')
  //     }else{
  //       console.log('google fue cancelado');
  //     }
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   })
  // };

  const showAlert = () =>
    Alert.alert(
      "Usuario no encontrado",
      "Verifique correo / contraseña",
      [
        {
          text: "Aceptar",
          onPress: () => {
            console.log("Presiono Aceptar");
          },
          style: "destructive",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          console.log("presiono otro lado que no es el alert");
        },
      }
    );

  const handleChange = (name: string, value: string) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async () => {
    setLoad(true);
    try {
      const a = await login(user.correo, user.password);
      console.log("222222", a.msg);
      if (a.usuario?.uid) {
        await AsyncStorage.setItem("token", a.token);
        setAuth(a.usuario)
        setRol(a.usuario.rol)
        navigation.navigate("home");
        setLoad(false);
      } else {
        setLoad(false);
        return showAlert();
      }
    } catch (error) {
      console.log("ERROR EN EL CHAT DE LOGIN", error);
    }
  };

  const handleShowRegister = () => {
    navigation.navigate("registrar");
  };

  const handleGoogleSignin = async () =>{
    const config = {
        iosClientId : "246628596412-u70v913809olspra2grcvc88oq0rehhd.apps.googleusercontent.com",
        androidClientId : "246628596412-6sqfnf9al2pc0l6v6h6gdd2updo7ljpi.apps.googleusercontent.com",
        scopes: ['profile','email']
    };

    try {

      const res : any = await Google.logInAsync(config)
      const { type, idToken } : any = res;
      if( type == 'success' ){
            setLoad(true)
          const resp = await loginGoogle(idToken);
          // console.log("respuesta 222222", resp)
          // console.log("222222", resp.msg);
          if (resp?.usuario?.uid) {
            // console.log("RESPUESTA DEL GOOGLE FETCH",resp)
            console.log("USUARIO DE LA RESPUESTA DE GOOGLE",resp.usuario)
            setAuth(resp.usuario)
            console.log("token del la respuesta del backend",resp.token)
            await AsyncStorage.setItem("token", resp.token);
            setLoad(false)
            navigation.replace("home");
          } else {
            console.log("NO SE ENCONTRO USUARIO", resp)
          }
      }
    } catch (error) {
      console.log("Google sign in no fue valido",error)
    }

 /*    Google.logInAsync( config )
        .then( (result)  => {
            console.log("33333333")
            console.log(result)
            const { type, idToken } : any = result;
            if( type == 'success' ){
              // const { email, name, phootoUrl }  = user;
              console.log(idToken);
                console.log("Se logeo exitosamento")
                console.log(user)
              
            }

        } )
        .catch( error =>{
            console.log(error);
            console.log("333333333333333333333333333333333333333333333333333333333333333333333333333")
            console.log("Google sign in no fue valido")
        }) */

};



  return (
    <View style={style.contenedor}>
      <MessageIndicator loading={load} />
      <View
        style={{
          width: "100%",
          height: 260,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Platform.OS == 'web' ?
          <Image
            source={{
              uri: "https://lvivity.com/wp-content/uploads/2019/12/uiux-design.png",
            }}
            style={{ height: 200, width: 200 }}
          />:<></>
        }
        {Platform.OS == 'android' ?
          <AnimatedLottieView
            style={{ width: 200, height: 200 }}
            source={require("../../animation/animation.json")}
            autoPlay
            loop
          /> : <></>
        }
        <Text style={style.appTitulo}>Teca App</Text>
      </View>
      <View>
        <Text style={style.labelTitulo}>Correo</Text>

        <View
        // style={ style.contenedorIconInput }
        >
          {/* <Icon
                        type="material-community"
                        name="plus"
                        color="#000"
                        size={26}
                    >
                    </Icon> */}
          <TextInput
            autoFocus={false}
            autoCapitalize="none"
            style={style.input}
            placeholder="Exmaple@teca.com"
            placeholderTextColor="#576574"
            value={user.correo}
            onChangeText={(text) => handleChange("correo", text)}
          />
        </View>

        <Text style={style.labelTitulo}>Contraseña</Text>
        <TextInput
          // keyboardType ="visible-password"
          style={style.input}
          autoCompleteType="password"
          placeholder="***********"
          secureTextEntry={true}
          placeholderTextColor="#576574"
          value={user.password}
          onChangeText={(text) => handleChange("password", text)}
        />

        <TouchableOpacity style={style.buttonSave} onPress={handleSubmit}>
          <Text style={style.buttonText}>Iniciar session</Text>
        </TouchableOpacity>

         <TouchableOpacity
                    style={style.buttonSave}
                    onPress={handleGoogleSignin}>
                    <Text
                        style={style.buttonText}
                    >
                        Iniciar con Google
                    </Text>
                </TouchableOpacity>

        <TouchableOpacity
          style={style.buttonRegister}
          onPress={handleShowRegister}
        >
          <Text style={style.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contenedor: {
    backgroundColor: "#A7C5DD",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  contenedorIconInput: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#10ac84",
    borderBottomWidth: 1,
    height: 30,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    fontSize: 14,
    // borderWidth: 1,
    // borderColor: "#10ac84",
    backgroundColor: "#fff",
    height: 30,
    color: "#000",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  inputFocus: {
    backgroundColor: "#000",
  },
  labelTitulo: {
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 4,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "100%",
  },
  buttonRegister: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  appTitulo: {
    fontWeight: "500",
    fontSize: 35,
    marginBottom: 4,
    color: "#fff",
  },
});

export default LoginScreen;
