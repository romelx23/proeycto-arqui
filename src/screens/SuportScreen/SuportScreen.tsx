import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default function SuportScreen() {
  return (
    <View style={style.containerSuport}>
      <Text style={style.textSuport}>Soporte</Text>
      <View style={style.contentSuport}>
        <Image
          style={style.imageCard}
          source={{
            uri: "https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
          }}
        />
        <Text style={style.textTitle}>¿Cómo puedo ayudarte?</Text>
        <Text style={style.text}>Parece que tienes problemas.</Text>
        <Text style={style.text}>
          Estamos aqui para ayudar,
        </Text>
        <Text style={style.text}>
          asi que porfavor contactanos
        </Text>
      </View>
      <View style={style.contentCard}>
        <TouchableOpacity style={style.cardSuport}>
          <FontAwesome name="whatsapp" color={"#333"} size={35} />
          <Text style={style.textCardSuport}>Hablar con alguien</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.cardSuport}>
          <FontAwesome name="envelope" color={"#333"} size={30} />
          <Text style={style.textCardSuport}>Enviar un mensaje</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerSuport: {
    flex: 1,
    backgroundColor: "#2058c2",
    display: 'flex',
    justifyContent:'space-around'
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize:18
  },
  textTitle:{
    color: "#fff",
    textAlign: "center",
    fontSize:23,
    fontWeight:"bold"
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
    color: "#ffffff",
    fontSize: 40,
    fontWeight:"bold"
  },
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom:20
  },
  contentCard:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
  },
  cardSuport: {
    width: 130,
    height: 130,
    display: 'flex',
    justifyContent:'space-around',
    alignItems:'center',
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#555",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    borderColor:'#444',
    borderWidth:.3,
    borderRadius:15,
  },
  textCardSuport: {
    color: "#3a3a3a",
    fontSize: 18,
    textAlign:'center'
  },
});
