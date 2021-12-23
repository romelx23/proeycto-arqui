import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
  Image,
} from 'react-native';
import i18n from "../../utils/i18n.config";

const ContactScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('986661493');
  const [whatsAppMsg, setWhatsAppMsg] = useState('');

  const initiateWhatsApp = () => {
    if (mobileNumber.length != 9) {
      alert('Please insert correct WhatsApp number');
      return;
    }
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=51' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
        {i18n.t("Ingrese su Consulta")}
        </Text>
        <Image
          style={styles.imageCard}
          source={{
            uri: "https://image.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
          }}
        />
        <Text style={styles.titleTextsmall}>
        {i18n.t("Ingrese su mensaje")}
        </Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={
            (whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)
          }
          placeholder={`${i18n.t("Ingrese su mensaje")}`}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>
          {i18n.t("Envie su Mensaje")}
          </Text>
        </TouchableOpacity>
      </View>
    // </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2058c2",
    padding: 20,
    alignItems:'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
    textAlign:'right',
    color: '#fff'
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    width: '100%',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor:'#fff'
  },
  imageCard: {
    marginVertical:10,
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 20
  },
});