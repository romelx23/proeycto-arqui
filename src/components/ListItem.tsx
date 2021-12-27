import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";

import { Icon } from "react-native-elements";

import Item from "./Item";
import { getProductos } from "../helpers/fetch";

import { FormaItem, PropsNavigationHome } from "./../interfaces/home";
import { ProductosContext } from "../context/ProductosContext";
import { Producto } from "../interfaces/producto";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
// interface Props{
//   item:Producto
// }

const ListItem = ({ navigation }: PropsNavigationHome) => {

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true)
    cargarProductos()
    console.log('refresh');
  }
  const { productos, setProductos, cargarProductos } =
    useContext<any>(ProductosContext);


  const { rol } = useContext(AuthContext);
  // const [productos2 , setProductos] = useState<Producto[]>();

  useEffect(() => {
    cargarProductos()
  }, []);

  const handleAgregarProducto = () => {
    // console.log("agrego algo")
    navigation.navigate("agregarPorducto");
  };

  // console.log("set productos",productos2);
  // const memo=useMemo(() => cargarProductos, productos)

  return (
    <View style={style.contenedorBotonFlatList}>
      <FlatList
        style={{ flex: 1 }}
        data={productos}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(product) => product?._id!.toString()}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        // onEndReached={isNext ? loadMore : null}
        // onEndReachedThreshold={0.1}
        // ListFooterComponent={
        // isNext ? (
        //     <ActivityIndicator
        //     size="large"
        //     color="#AEAEAE"
        //     style={style.spinner}
        //     />
        // ) : null
        // }
        // refreshControl={
        //   <RefreshControl
        //     colors={['#345467']}
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //   />
        // }
      />
      {
        rol === "ADMIN_ROLE" ? (<TouchableOpacity
          style={style.botonAgregar}
          onPress={handleAgregarProducto}
        >
          <Icon
            type="material-community"
            name="plus"
            color="#fff"
            size={26}
          ></Icon>
        </TouchableOpacity>) : <></>
      }
    </View>
  );
};

const style = StyleSheet.create({
  contenedorBotonFlatList: {
    flex: 1,
    padding: 20,
  },
  contenedor: {},
  botonAgregar: {
    width: 60,
    height: 60,
    alignItems: "center",
    backgroundColor: "#0C8BF0",
    padding: 1,
    borderRadius: 40,
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowOffset: { width: 1, height: 1 },
    justifyContent: "center",
    alignContent: "center",
  },
});

export default ListItem;
