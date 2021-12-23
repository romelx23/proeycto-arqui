import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import i18n from "../../utils/i18n.config";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../../components/LanguagePicker";
import FontPicker from "../../components/FontPicker";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function SettingScreen() {
  const { t } = useTranslation();
  let [fontsLoaded] = useFonts({
    'Pacifico': require('../../../assets/fonts/Pacifico-Regular.ttf'),
    'Nunito': require('../../../assets/fonts/NunitoSans-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={style.containerSuport}>
        <Text style={style.textSuport}>{`${i18n.t("Configuración")}`}</Text>
        <View style={style.contentSuport}>
          <TouchableOpacity activeOpacity={0.84}>
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
                  uri: "https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
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
          <TouchableOpacity style={style.cardConfig}>
            <FontAwesome name="user" color={"#333"} size={30} />
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
}

const style = StyleSheet.create({
  containerSuport: {
    flex: 1,
    backgroundColor: "#2058c2",
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
    color: "#ffffff",
    fontSize: 40,
    // fontWeight: "bold",
    fontFamily:'Pacifico'
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
    backgroundColor: "#fff",
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
    color: "#3a3a3a",
    fontSize: 18,
    textAlign: "center",
    fontFamily:'Pacifico'
  },
});
