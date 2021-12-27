import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity,Image } from 'react-native';
import i18n from "./../utils/i18n.config";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useTheme } from '@react-navigation/native';
const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  // const { i18n } = useTranslation();

  //array with all supported languages
  const languages = [
    { name: "en", label: "English" ,url:'https://cdn-icons-png.flaticon.com/512/197/197374.png'},
    { name: "fr", label: "Français",url:'https://cdn-icons-png.flaticon.com/512/197/197560.png' },
    { name: "es", label: "Español" ,url:'https://cdn-icons-png.flaticon.com/512/197/197593.png'},
    { name: "jp", label: "Japonés" ,url:'https://cdn-icons-png.flaticon.com/512/197/197604.png'},
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
        style={[{backgroundColor:colors.card,...styles.button}, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="language" color={"#ffffff"} size={30} />
        <Text style={styles.textStyle}>Elija Idioma</Text>
        <Text style={styles.textStyle}>{i18n.language}</Text>
        <Image style={{marginLeft:10,width:20,height:20}} source={{uri:image}} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    button:{
      // backgroundColor:'#fff',
      paddingHorizontal:20,
      paddingVertical:20,
      marginHorizontal:30,
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      borderRadius:20
    },
    buttonOpen:{

    },
    textStyle:{
      textAlign:'center',
      color:'#fff'
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
      backgroundColor:'#505050',
      paddingHorizontal:20,
      paddingVertical:15
    }

})

export default LanguagePicker;