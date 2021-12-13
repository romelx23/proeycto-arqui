import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextArea } from "../../components/TextArea";
import { Navigation } from "../../interfaces/Navigation";

interface Props{
    navigation:Navigation
}

export default function ActualizarUsuario({navigation}:Props) {
  const [producto, setProducto] = useState({
    precio: 0,
    disponible: true,
    nombre: "",
    descripcion: "",
    categoria: "61a7933a3daea00016e4f7cd",
    img: "https://via.placeholder.com/200",
  });
  const handleChange = (name: string, value: string) => setProducto({ ...producto, [name]: value });

  const handleSubmit = async () => {
    navigation.navigate("home");
  };

  return (
    <ScrollView>
      <View style={style.contenedorAgregar}>
        <Text>Nombre del producto</Text>
        <TextInput
          style={style.input}
          placeholder="Nombre del producto"
          placeholderTextColor="#ADADAD"
          value={producto.nombre}
          onChangeText={(a) => handleChange("nombre", a)}
        ></TextInput>

        <Text>Precio del producto</Text>
        <TextInput
          style={style.input}
          placeholder="Precio..."
          placeholderTextColor="#ADADAD"
          keyboardType="number-pad"
          value={producto.precio.toString()}
          onChangeText={(a) => handleChange("precio", a)}
        ></TextInput>

        <Text>Descripción del producto</Text>
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

        <View style={style.contenedorBuscarImagen}>
          <TouchableOpacity
            // onPress={handleCargarImagen}
            style={style.buttonBuscarImage}
          >
            <Text style={style.TextButonBuscarImagen}>Buscar Imagen...</Text>
          </TouchableOpacity>
          {/* <Image
            style={style.imagen}
            source={{
              uri: !imageSelected.localUri
                ? "https://via.placeholder.com/200"
                : imageSelected.localUri,
            }}
          ></Image> */}
        </View>

        <TouchableOpacity style={style.buttonSave} onPress={handleSubmit}>
          <Text style={style.buttonSaveText}>Agregar Producto</Text>
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
