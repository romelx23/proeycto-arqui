import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  getProductbyId,
  saveProducto,
  updateProducto,
} from "../../helpers/fetch";
import { PropsDetalleProducto, PropsRouteDetalle } from "../../interfaces/home";
import { TextArea } from "../../components/TextArea";
import {
  InterfaceRespuestaCloudinary,
  InterfaceStateImage,
} from "../../interfaces/producto";
import * as ImagePicker from "expo-image-picker";
import { ProductosContext } from "../../context/ProductosContext";
import { Layout } from "../../components/Layout";
import { useTheme } from "@react-navigation/native";

export default function UpdateScreen({
  route,
  navigation,
}: PropsDetalleProducto) {
  const{colors}=useTheme();
  const { cargarProductos } = useContext<any>(ProductosContext);
  const [imageSelected, setImageSelected] = useState<InterfaceStateImage>({
    localUri: "",
  });
  const [producto, setProducto] = useState({
    precio: 0,
    disponible: true,
    nombre: "",
    descripcion: "",
    categoria: "61a7933a3daea00016e4f7cd",
    img: "https://via.placeholder.com/200",
    idProducto: "",
    mac: "",
    activo: false,
  });
  const [image, setImage] = useState("");
  const { _id: id } = route.params.item;
  // console.log(route.params.item._id);
  useEffect(() => {
    getProductbyId(`${id}`).then((resp) => {
      const { producto } = resp;
      setProducto({
        precio: parseInt(producto.precio),
        disponible: true,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        categoria: "61a7933a3daea00016e4f7cd",
        img: producto.img,
        idProducto: producto.idProducto,
        mac: producto.mac,
        activo: producto.activo,
      });
    });
  }, []);
  const handleChange = (name: string, value: string) =>
    setProducto({ ...producto, [name]: value });

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

  const handleSubmit = async () => {
    console.log("111111111111111111111111");

      const photo = {
        uri: imageSelected.localUri,
        type: `test/${imageSelected.localUri?.split(".")[1]}`,
        name: `test/${imageSelected.localUri?.split(".")[1]}`,
      };

      const url = "https://api.cloudinary.com/v1_1/dbrnlddba/upload";
      console.log("2222222222222222222222222");

      const formData = new FormData();
      formData.append("upload_preset", "nutrifit");
      formData.append("file", JSON.parse(JSON.stringify(photo)));
      console.log("3333333333333333333");

      const data_image = await fetch(url, {
        method: "POST",
        body: formData,
      });
      console.log("4444444444444444444444444444444");

      const paser: InterfaceRespuestaCloudinary = await data_image.json();

      setImage(paser.secure_url);
      console.log(producto);
      const newProducto = await updateProducto(id, producto, paser.secure_url);

      console.log(newProducto);
      await cargarProductos();

    navigation.navigate("home");
  };

  return (
    <ScrollView>
            <View
                style={style.contenedorAgregar}
            >
      <Text style={{color:colors.text}}>Nombre del producto</Text>
      <TextInput
        style={style.input}
        placeholder="Nombre del producto"
        placeholderTextColor="#ADADAD"
        value={producto.nombre}
        onChangeText={(a) => handleChange("nombre", a)}
      ></TextInput>

      <Text style={{color:colors.text}}>Precio del producto</Text>
      <TextInput
        style={style.input}
        placeholder="Precio..."
        placeholderTextColor="#ADADAD"
        keyboardType="number-pad"
        value={producto.precio.toString()}
        onChangeText={(a) => handleChange("precio", a)}
      ></TextInput>

      <Text style={{color:colors.text}}>Descripción del producto</Text>
      <View
        style={{
          backgroundColor: "#fff",
          // borderWidth: 2,
          // borderColor: "yellow",
        }}
      >
        <TextArea
          multiline
          numberOfLines={4}
          value={producto.descripcion}
          onChangeText={(a: string) => handleChange("descripcion", a)}
          style={{ padding: 10 }}
        />
      </View>
      <Text style={{color:colors.text}}>Id de producto</Text>
      <TextInput
        style={style.input}
        placeholder="Nombre del idProducto"
        placeholderTextColor="#ADADAD"
        value={producto.idProducto}
        onChangeText={(a) => handleChange("idProducto", a)}
      ></TextInput>
      <Text style={{color:colors.text}}>Mac de producto</Text>
      <TextInput
        style={style.input}
        placeholder="Nombre del mac"
        placeholderTextColor="#ADADAD"
        value={producto.mac}
        onChangeText={(a) => handleChange("mac", a)}
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
              ? producto.img
              : imageSelected.localUri,
          }}
        ></Image>
      </View>

      <TouchableOpacity style={style.buttonSave} onPress={handleSubmit}>
        <Text style={style.buttonSaveText}>Actualizar Producto</Text>
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
    backgroundColor: "#fff",
  },
});
