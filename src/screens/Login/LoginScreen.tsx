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

/* 
Object {
  "accessToken": "ya29.a0ARrdaM9_5veKi7HMCAdyNEwO0jTQB5c-cZUlQYyu-2bQrR2xFI6MWbLKlzNWUTyEKVywhaCMGWYwmym2SvXKvSrw8OtUzkUxb00DKdr50vMHg44t9C5cgxPUB0xhPRWmhvUvAtb8l6ZGL9nFNYlZItY3GRDW",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5OGY0OWJjNmNhNDU4MWVhZThkZmFkZDQ5NGZjZTEwZWEyM2FhYjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyNDY2Mjg1OTY0MTItNnNxZm5mOWFsMnBjMGw2djZoNmdkZDJ1cGRvN2xqcGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyNDY2Mjg1OTY0MTItNnNxZm5mOWFsMnBjMGw2djZoNmdkZDJ1cGRvN2xqcGkuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDcyNDM0MDgzODE0MDExMTI1NjMiLCJoZCI6InVudGVscy5lZHUucGUiLCJlbWFpbCI6Ijc0MzA5MjczQHVudGVscy5lZHUucGUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InpibDV0RTRMWklSNXNteVR3NG9kNXciLCJuYW1lIjoiQ1JJU1RJQU4gQ0hJUEFOQSBIVUFNQU4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2p1THFsZlYzSDVFVUlrTmJVQU91eFhQelRab252TldkQ3FETDR2PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkNSSVNUSUFOIiwiZmFtaWx5X25hbWUiOiJDSElQQU5BIEhVQU1BTiIsImxvY2FsZSI6ImVzLTQxOSIsImlhdCI6MTYzOTY5NjQ0MCwiZXhwIjoxNjM5NzAwMDQwfQ.qM53wUt2p4wFxGNlHDPD8pI4dHeAkjJxMUmr6rjSCL3jhGL-MXh7UKT9x3ppYY4caw4EDw8rDjOr5UzcdtE1vb0bnlHpT3buhlz9HFHUS4uWa_foF6m5Z0P8XzZbskRGig-foeJmlzJLHqRlY9FDaAm08FGg5KcY5TrV1ehbK8vtXpP1-Ke4LoFbtte2GKBUk4yXdH85AygVU3EaXZLALBbNKJ7xih5lW1BxBjI-MGOWdn0j1-SSgU-lCtbsCHHCAq33kv6AKUoSBTtQD3SkN4z7mR-jWs1rRjAX3GOEOjR5ZbNqqAiEcg2HM690Txxc3GLniNAhf9WFjY7cenSINQ",
  "refreshToken": "1//0hMfPKoQcRPqvCgYIARAAGBESNwF-L9IrR7DDw32HMIdW0F3vBlIv7jEItgk2fV7zHgOsKYoVfXh7H0F4tRuo7EKaep3Ct5aNW5o",   
  "type": "success",
  "user": Object {
    "email": "74309273@untels.edu.pe",
    "familyName": "CHIPANA HUAMAN",
    "givenName": "CRISTIAN",
    "id": "107243408381401112563",
    "name": "CRISTIAN CHIPANA HUAMAN",
    "photoUrl": "https://lh3.googleusercontent.com/a-/AOh14GjuLqlfV3H5EUIkNbUAOuxXPzTZonvNWdCqDL4v=s96-c",
  },
} */


const LoginScreen = ({ navigation }: PropsLoginScreen) => {
  // const [load, setLoad] = useState(false);
  const { load, setLoad } = useContext(showContext);
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
    setLoad(true)
    try {
      const a = await login(user.correo, user.password);
      console.log("222222", a.msg);
      if (a.usuario.uid) {
        await AsyncStorage.setItem("token", a.token);
        navigation.navigate("home");
        setLoad(false)
      } else {
        showAlert();
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
    flexDirection:'column',
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
