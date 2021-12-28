import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import i18n from "../../utils/i18n.config";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../../components/LanguagePicker";
import FontPicker from "../../components/FontPicker";
import AppLoading from 'expo-app-loading';
import { fetchFont } from "../../helpers/fetchFonts";
import { useTheme } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/AuthContext";

import * as ImagePicker from 'expo-image-picker'
import { InterfaceRespuestaCloudinary } from "../../interfaces/producto";
import { UpdateUsuario } from "../../helpers/apiUsuarios";
import { user } from "../../interfaces/user";
import { MoificarImageUser } from "../../helpers/fetchImageUser";
import { ProductosContext } from "../../context/ProductosContext";
import { showContext } from "../../context/ShowMessage";
import MessageIndicator from "../../components/MessageIndicator";


export default function SettingScreen() {

  const { auth, setAuth, rol, setRol } = useContext(AuthContext);
  const { cargarProductos } = useContext<any>(ProductosContext);
  const { load, setLoad } = useContext(showContext);


  const { nombre, correo, img } = auth;

  const navigation = useNavigation();

  const [imageSelected, setImageSelected] = useState({
    localUri: ''
  });

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

    try {
      
      // console.log("111111111111111111111111111111111111111")
  
      const photo = {
        uri: imageSelected.localUri,
        type: `test/${imageSelected.localUri?.split(".")[1]}`,
        name: `test/${imageSelected.localUri?.split(".")[1]}`,
      };
      // console.log("22222222222222222222222222222222222222222")
      // const url = "https://api.cloudinary.com/v1_1/dbrnlddba/upload"
      const url = "https://api.cloudinary.com/v1_1/dbrnlddba/image/upload"
  
      const formData = new FormData();
      formData.append('upload_preset', "nutrifit");
      formData.append('file', JSON.parse(JSON.stringify(photo)));
      // console.log("33333333333333333333333333333333333333333333333")
      setLoad(true)

      try {
        
        const data_image = await fetch(url, {
          method: 'POST',
          body: formData,
        })
        const paser: InterfaceRespuestaCloudinary = await data_image.json();
        // console.log("444444444444444444444444444444444444")
        // //todo: actualizar la foto de perfil
        // console.log("5555555555555555555555555555555")
        const {usuario} = await MoificarImageUser(auth.uid,auth, paser.secure_url);
        // console.log("12312312332131123123123123123123",usuario)
        // const newProducto = await saveProducto(producto, paser.secure_url);
        // await cargarProductos();
        // console.log(newProducto);
        setLoad(false)
        setAuth({...usuario, logged: true})
        setRol(usuario.rol)
        // todo: navegar hacia atras
        await cargarProductos();
        // navigation.navigate('home')

      } catch (error) {
        console.log(error, "FALLA PÓSTEO CLOUDINARY")
        setLoad(false)

      }


      
    } catch (error) {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1111",error)
      setLoad(false)
    }

    // await handleSubmit();
  }


  const { colors } = useTheme();
  const { background, text, card } = colors
  const [fontloaded, setFontloaded] = useState(false)
  if (!fontloaded) {
    return <AppLoading
      startAsync={fetchFont}
      onError={() => console.log('Error font dont loaded')}
      onFinish={() => {
        setFontloaded(true)
      }}
    />;
  }
  return (
    <View style={{ backgroundColor: background, ...style.containerSuport }}>
      <MessageIndicator loading={load} />
      {/* <Text style={{color:text,...style.textSuport}}>{i18n.t("Configuración")}</Text> */}
      <View style={style.contentSuport}>
        <TouchableOpacity
          activeOpacity={0.84}
          onPress={() => {
            handleCargarImagen()
            console.log("Click en buscar imagen")
          }}
        >
          <View
            style={{
              borderColor: "#444",
              borderWidth: 15,
              borderRadius: 100,
            }}
          >
            <Image
              style={style.imageCard}
              source={{
                uri: img,
              }}
            />
          </View>
          <View style={style.cameraIcon}>
            <FontAwesome name="camera" color={"#333"} size={30} />
          </View>
        </TouchableOpacity>
      </View>
      <LanguagePicker />
      <View style={style.contentCard}>
        <TouchableOpacity
          style={{ backgroundColor: card, ...style.cardConfig }}
          onPress={() => {
            navigation.navigate("actualizarDatosUser")
          }}
        >
          <FontAwesome name="user" color={"#ffffff"} size={30} />
          <Text style={style.textCardSuport}>{`${i18n.t("Configure su Usuario")}`}</Text>
        </TouchableOpacity>
        <FontPicker />
        {/* <TouchableOpacity style={style.cardConfig}>
          <FontAwesome name="language" color={"#333"} size={30} />
          <Text style={style.textCardSuport}>{`${i18n.t("Cambiar el idioma")}`}</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerSuport: {
    flex: 1,
    // backgroundColor: "#2058c2",
    display: "flex",
    justifyContent: "space-around",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  textTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
  },
  contentSuport: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'#978a8a'
  },
  textSuport: {
    textAlign: "center",
    // color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    // fontFamily:'Pacifico'
  },
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  contentCard: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 30,
  },
  cardConfig: {
    marginBottom: 20,
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    // backgroundColor: "#fff",
    shadowColor: "#555",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    borderColor: "#444",
    borderWidth: 0.3,
    borderRadius: 15,
  },
  textCardSuport: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    // fontFamily:'Pacifico'
  },
});
