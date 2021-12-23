import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity,Image } from 'react-native';
import i18n from "./../utils/i18n.config";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
const FontPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const languages = [
    { name: "en", label: "Nunito" },
    { name: "fr", label: "Elegant"},
    { name: "es", label: "Kursiva" },
    { name: "jp", label: "Especial" },
  ];
  
  const LanguageItem = ({ name, label }: { name: string; label: string}) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        console.log(name)
        console.log(label)
        i18n.changeLanguage(name); 
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="font" color={"#333"} size={30} />
        <Text style={styles.textStyle}>Elija su Fuente</Text>
        <Text style={styles.textStyle}>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    button:{
      backgroundColor:'#fff',
      paddingHorizontal:20,
      paddingVertical:20,
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      borderRadius:20,
      alignItems:'center'
    },
    buttonOpen:{

    },
    textStyle:{
      textAlign:'center'
    },
    centeredView:{
        display: 'flex',
        width:'100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#5783d69e'
    },
    modalView:{
      backgroundColor:'#fff',
      fontSize:30,
      paddingHorizontal:20,
      paddingVertical:15,
      alignItems:'center',
    }

})

export default FontPicker;