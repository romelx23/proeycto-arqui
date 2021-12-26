import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Navigation } from "../../interfaces/Navigation";
import { InterfaceRespuestaCloudinary, InterfaceStateImage } from "../../interfaces/producto";
import * as ImagePicker from "expo-image-picker";
import { user } from "../../interfaces/user";
import { UpdateUsuario } from "../../helpers/apiUsuarios";
import { ProductosContext } from "../../context/ProductosContext";
import { useTheme } from "@react-navigation/native";

interface Props {
  navigation: Navigation,
  route:{
    params:{
      item:user
    }
  }
}

export default function ActualizarUsuario({ navigation,route }: Props) {

  const { colors } = useTheme();
  const { nombre,img,uid,correo,rol,password } = route.params.item;

  const [usuario, setProducto] = useState({
    nombre,
    img: 'https://icon-library.com/images/icon-avatar/icon-avatar-1.jpg',
    correo,
    rol,
    uid,
    password,
  });
  const [imageSelected, setImageSelected] = useState<InterfaceStateImage>({
    localUri: img,
  });
  const [image, setImage] = useState("");

  const { cargarUsuario } = useContext<any>(ProductosContext);

  const handleCargarImagen = async () => {
    const resultadosPermiso =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (resultadosPermiso.granted === false) {
      alert("Permiso de la camara requeridos");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled) {
      return;
    }

    setImageSelected({ localUri: pickerResult.uri });
  };

  const handleChange = (name: string, value: string) => setProducto({ ...usuario, [name]: value });

  const handleSubmit = async () => {
    try {
      const photo = {
        uri: imageSelected.localUri,
        type: `test/${imageSelected.localUri?.split(".")[1]}`,
        name: `test/${imageSelected.localUri?.split(".")[1]}`,
      };
  
      const url = "https://api.cloudinary.com/v1_1/dbrnlddba/upload";
  
      const formData = new FormData();
      formData.append("upload_preset", "nutrifit");
      formData.append("file", JSON.parse(JSON.stringify(photo)));
  
      const data_image = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const paser: InterfaceRespuestaCloudinary = await data_image.json();
  
      setImage(paser.secure_url);
  
      const updateUser = await UpdateUsuario(uid, usuario, paser.secure_url);
  
      console.log(updateUser);
      await cargarUsuario();
  
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={style.contenedorAgregar}>
        <Text style={{color:colors.text}}>Nombre del usuario</Text>
        <TextInput
          style={{
            backgroundColor:colors.primary,
            color:colors.text,
            ...style.input
          }}
          placeholder="Nombre del usuario"
          placeholderTextColor="#ADADAD"
          value={usuario.nombre}
          onChangeText={(a) => handleChange("nombre", a)}
        ></TextInput>

        <View style={style.contenedorBuscarImagen}>
          <TouchableOpacity
            onPress={handleCargarImagen}
            style={style.buttonBuscarImage}
          >
            <Text style={style.TextButonBuscarImagen}>Buscar Imagen...</Text>
          </TouchableOpacity>
          <Image
            style={style.imagen}
            source={{
              uri: !imageSelected.localUri
                ? "https://via.placeholder.com/200"
                : imageSelected.localUri,
            }}
          ></Image>
        </View>

        <TouchableOpacity style={style.buttonSave} onPress={handleSubmit}>
          <Text style={style.buttonSaveText}>Actualizar Usuario</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  contenedorAgregar: {
    padding: 15,
    flex: 1,
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
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  imagen: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 50,
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
    // color: "#000",
    textAlign: "center",
    padding: 10,
    borderRadius: 8,
    // backgroundColor: "#fff",
  },
});
