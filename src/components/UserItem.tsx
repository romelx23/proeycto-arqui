import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Navigation } from "../interfaces/home";
import { user } from "../interfaces/user";

interface Props {
  item: user,
  navigation:Navigation
}

export default function UserItem({ item,navigation }: Props) {

    const handleUpdateUser=()=>{
        navigation.navigate('actualizarUsuario',{item})
    }

  return (
    <View style={style.cardUser}>
      <TouchableOpacity 
      style={{
          width:'100%',
          display: 'flex',
          flexDirection:'row',
          justifyContent:'space-around'
    }} 
      onPress={handleUpdateUser}>
        <View>
          <Text>{item.nombre}</Text>
          <Text>{item.correo}</Text>
          <Text>{item.rol}</Text>
        </View>
        <Image
          source={{
            uri: item.img ? item.img : "https://via.placeholder.com/200",
          }}
          style={{
            width:80,
            height:80,
            borderRadius:50
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  cardUser: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#47abee",
    borderBottomColor: "#222",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20,
  },
});
