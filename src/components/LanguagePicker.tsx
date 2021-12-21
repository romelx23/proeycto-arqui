import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity,Image } from 'react-native';
import i18n from "./../utils/i18n.config";
const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const { i18n } = useTranslation();

  //array with all supported languages
  const languages = [
    { name: "en", label: "English" ,url:'https://cdn-icons-png.flaticon.com/512/197/197374.png'},
    { name: "fr", label: "Français",url:'https://cdn-icons-png.flaticon.com/512/197/197560.png' },
    { name: "es", label: "Español" ,url:'https://cdn-icons-png.flaticon.com/512/197/197593.png'},
  ];
  const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/197/197593.png");
  const LanguageItem = ({ name, label,url }: { name: string; label: string,url:string }) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        console.log(name)
        console.log(label)
        i18n.changeLanguage(name); 
        setModalVisible(!modalVisible);
        setImage(url);
      }}
    >
      <Text style={styles.textStyle}>{label}</Text>
      <Image style={{marginLeft:10,width:20,height:20}} source={{uri:url}} />
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
        <Text style={styles.textStyle}>Elija Idioma</Text>
        <Text style={styles.textStyle}>{i18n.language}</Text>
        <Image style={{marginLeft:10,width:20,height:20}} source={{uri:image}} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    button:{
      backgroundColor:'#fff',
      paddingHorizontal:20,
      paddingVertical:20,
      marginHorizontal:20,
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-around'
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
      paddingHorizontal:20,
      paddingVertical:15
    }

})

export default LanguagePicker;