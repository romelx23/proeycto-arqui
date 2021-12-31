import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Producto } from "../interfaces/producto";
import { useTheme } from "@react-navigation/native";
import {
  SharedElement
} from "react-navigation-shared-element";

interface Props extends NativeStackScreenProps<any, any> {
  item: Producto;
}
const Item = ({ item, navigation }: Props) => {
  const { colors, cardColor } = useTheme();

  const handleOpenScren = () => {
    navigation.navigate("detalleProducto", { item });
  };

  return (
    <View
      style={{
        backgroundColor: cardColor,
        ...style.contenedorItem,
      }}
    >
      <SharedElement id={`item.${item._id}.title`}>
        <Text style={{ color: colors.text, ...style.nombre }}>{item.nombre}</Text>
      </SharedElement>
      <View style={style.contenedorImagenBoton}>
        <SharedElement id={`item.${item._id}.image`}>
          <Image
            source={{
              uri: item.img
                ? item.img
                : "https://swimg.com/wp-content/uploads/not-available.jpg",
            }}
            style={style.contenedorImage}
          ></Image>
        </SharedElement>
        <TouchableOpacity style={style.botonInfo} onPress={handleOpenScren}>
          <Icon
            style={style.iconPlus}
            type="material-community"
            name="plus"
            color="#000"
            size={16}
          ></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contenedorItem: {
    flex: 1,
    // backgroundColor: "#A7C5DD",
    borderRadius: 20,
    margin: 10,
    marginEnd: 7,
    marginStart: 7,
    padding: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorImagenBoton: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contenedorImage: {
    width: 80,
    height: 90,
    borderRadius: 9,
    resizeMode: "cover",
  },
  botonInfo: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#F5F4F4",
    marginLeft: 11,
    justifyContent: "center",
    alignContent: "center",
    shadowOffset: { width: 2, height: 2 },
  },

  nombre: {
    // color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
    paddingEnd: 5,
    paddingStart: 5,
    marginBottom: 6,
  },
  precio: {},
  iconPlus: {
    fontWeight: "700",
    fontSize: 16,
  },
});

export default Item;
