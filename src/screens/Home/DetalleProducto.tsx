import React, { useContext, useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { PropsDetalleProducto, Route } from '../../interfaces/home';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { deleteProducto } from "../../helpers/fetch";
import { ProductosContext } from "../../context/ProductosContext";
import { AuthContext } from "../../context/AuthContext";
import i18n from "../../utils/i18n.config";
import { useTheme } from '@react-navigation/native';
import {
  SharedElement
} from 'react-navigation-shared-element';

const DetalleProducto = ({ route, navigation }: PropsDetalleProducto) => {
  const { colors } = useTheme();
  const { params } = route;
  const { item } = params;
  console.log(item._id);
  const { cargarProductos } = useContext<any>(ProductosContext);
  const changeScreen = () => {
    navigation.navigate("actualizarPorducto", { item: item });
  };

  const { rol } = useContext(AuthContext);

  const showMessage = () => {
    Alert.alert(
      "Mensaje del Sistema",
      "¿Estas seguro de querer eliminar el Producto?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteProducto(item._id)
              .then(() => {
                return cargarProductos();
              })
              .then(() => {
                navigation.navigate("home");
              });
            console.log("OK Pressed");
          },
        },
      ]
    );
  };



  return (
    <View style={style.contenedorDetalle}>
      <View style={style.contenedorImageTitulo}>
      <SharedElement id={`item.${item._id}.title`}>
        <Text style={style.nombreProducto}>{item.nombre}</Text>
        </SharedElement>
        <View style={style.contenedorImagen}>
          <SharedElement id={`item.${item._id}.image`}>
            <Image source={{ uri: item.img }} style={style.imagen}></Image>
          </SharedElement>
        </View>
      </View>

      <View style={style.contenedorDescripcion}>
        <Text style={{ color: colors.text, ...style.titulo1 }}>
          {`${i18n.t("Precio")}`}:
        </Text>
        <Text style={{ color: colors.text, ...style.tituloContenido }}>S/.{item.precio}</Text>

        <Text style={{ color: colors.text, ...style.titulo1 }}>
          {`${i18n.t("Descripcion")}`}:
        </Text>
        <Text style={{ color: colors.text, ...style.tituloContenido }}>{item.descripcion}</Text>
        <View>
          {
            rol === "ADMIN_ROLE" ?
              (<Text style={{ color: colors.text, ...style.titulo1 }}>Acciones:</Text>)
              : <></>
          }
        </View>
      </View>
      {
        rol === "ADMIN_ROLE" ? (
          <View style={style.containerButtons}>
            <TouchableOpacity
              onPress={showMessage}
              activeOpacity={0.1}
              style={style.buttonDelete}
            >
              <View style={style.contentButton}>
                <Text style={style.text}>Delete</Text>
                <FontAwesome name="trash-alt" color={"#fff"} size={20} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={changeScreen}
              activeOpacity={0.1}
              style={style.buttonUpdate}
            >
              <View style={style.contentButton}>
                <Text style={style.text}>Update</Text>
                <FontAwesome name="pencil-alt" color={"#fff"} size={20} />
              </View>
            </TouchableOpacity>
          </View>
        ) : <></>
      }
    </View>
  );
};

const style = StyleSheet.create({
  contenedorDetalle: {
    /*       borderColor: "red",
              borderWidth: 2, */
    flex: 1,
  },
  contenedorImageTitulo: {
    backgroundColor: "#A7C4DC",
    width: "100%",
    height:
      Dimensions.get("window").height - Dimensions.get("window").height / 2.5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    paddingTop: 25,
  },
  contenedorImagen: {
    width: "auto",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorDescripcion: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    paddingLeft: 15,
  },
  imagen: {
    width: 300,
    height: 350,
    resizeMode: "cover",
  },
  nombreProducto: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "300",
    padding: 10,
  },
  titulo1: {
    fontWeight: "700",
  },
  tituloContenido: {},
  containerButtons: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  contentButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDelete: {
    width: 100,
    height: 60,
    backgroundColor: "#cc382b",
    borderRadius: 10,
  },
  buttonUpdate: {
    width: 100,
    height: 60,
    backgroundColor: "#2685c5",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
  },
});

DetalleProducto.sharedElements=(route:Route) => {
  const { item } = route.params;
  return [
    {
      id:`item.${item._id}.image`
    },
    {
      id:`item.${item._id}.title`
    },
    {
      id:`item.${item._id}.description`
    }
  ];
}

// height:Dimensions.get('window').height,
// width:Dimensions.get('window').width,
// justifyContent:'center',
// alignItems:'center',
// position:'absolute',

export default DetalleProducto;
