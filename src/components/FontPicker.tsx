import React, { useContext, useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity,Image } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { fontContext } from "../context/FontContext";
import { useTheme } from '@react-navigation/native';
const FontPicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();
  // const [fuente, setFuente] = useState('');

  const languages = [
    { name: "pa", label: "Pacifico" },
    { name: "nu", label: "Nunito"},
    { name: "me", label: "Merriweather" },
    { name: "in", label: "IndieFlower" },
    { name: "ca", label: "Cairo" },
    { name: "de", label: "Default" },
  ];
  const { fuente,setFuente } =useContext<any>(fontContext);

  const LanguageItem = ({ label }: { label: string}) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        setFuente(label) 
        if(label=='Default'){
          setFuente('') 
        }
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
        style={[{backgroundColor:colors.card,...styles.button}, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="font" color={"#ffffff"} size={30} />
        <Text style={styles.textStyle}>Elija su Fuente</Text>
        <Text style={styles.textStyle}>{fuente}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    button:{
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
      // borderRadius:20,
      fontSize:35,
      paddingHorizontal:20,
      paddingVertical:15,
      alignItems:'center',
    }

})

export default FontPicker;