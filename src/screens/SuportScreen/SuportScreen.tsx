import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { PropsLoginScreen } from "../../interfaces/login";
import i18n from "../../utils/i18n.config";
import { useTheme } from '@react-navigation/native';
export default function SuportScreen({ navigation }: PropsLoginScreen) {
  const { colors } = useTheme();

  const handleContact=()=>{
    navigation.navigate('ContactScreen')
  }
  const handleGmail=()=>{
    navigation.navigate('GmailScreen')
  }

  return (
    <View style={{backgroundColor:colors.background,...style.containerSuport}}>
      <Text style={{color:colors.text,...style.textSuport}}>{i18n.t("Soporte")}</Text>
      <View style={style.contentSuport}>
        <Image
          style={style.imageCard}
          source={{
            uri: "https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
          }}
        />
        <Text style={{color:colors.text,...style.textTitle}}>{i18n.t("¿Cómo puedo ayudarte?")}</Text>
        <Text style={{color:colors.text,...style.text}}>{i18n.t("Parece que tienes problemas")}.</Text>
        <Text style={{color:colors.text,...style.text}}>
          {i18n.t("Estamos aqui para ayudar")}
        </Text>
        <Text style={{color:colors.text,...style.text}}>
          {i18n.t("asi que porfavor contactanos")}
        </Text>
      </View>
      <View style={style.contentCard}>
        <TouchableOpacity
        onPress={handleContact}
          style={{backgroundColor:colors.card,...style.cardSuport}}>
          <FontAwesome
            name="whatsapp"
            color={"#eee"} size={35} />
          <Text
            style={style.textCardSuport}>
            {i18n.t("Hablar con alguien")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleGmail}
          style={{backgroundColor:colors.card,...style.cardSuport}}>
          <FontAwesome
            name="envelope"
            color={"#eee"} size={30} />
          <Text
            style={style.textCardSuport}>
            {i18n.t("Enviar un mensaje por email")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerSuport: {
    flex: 1,
    // backgroundColor: "#2058c2",
    display: 'flex',
    justifyContent: 'space-around'
  },
  text: {
    // color: "#fff",
    textAlign: "center",
    fontSize: 18
  },
  textTitle: {
    // color: "#fff",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold"
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
    fontWeight: "bold"
  },
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 20
  },
  contentCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cardSuport: {
    width: 130,
    height: 130,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: "#fff",
    shadowColor: "#555",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    borderColor: '#444',
    borderWidth: .3,
    borderRadius: 15,
  },
  textCardSuport: {
    color: "#f0f7ff",
    fontSize: 18,
    textAlign: 'center'
  },
});
