import React from "react";
import { View, Text, StyleSheet,ActivityIndicator,Image } from "react-native";
// import { ActivityIndicator } from "react-native-paper";
interface Props{
    loading:boolean
}

export default function MessageIndicator({loading}:Props) {
  if(loading){
    return (
        <View style={styles.container}>
          <View style={styles.horizontal}>
            {/* <ActivityIndicator 
            size="large" 
            color={'#fff'}
            /> */}
            <Image
              source={require(`../../assets/spin.gif`)}
              style={{width:100,height:100}}
            />
            <Text style={{color:'#fff'}}>Espere un Momento</Text>
          </View>
        </View>
      );
  }
  return <View></View>;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '46%',
    left: '45%',
    transform: [
        { translateX: -50 },
      ],
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    backgroundColor:'transparent',
    zIndex:3,
  },
  horizontal: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems:'center',
    padding: 20,
    backgroundColor:'#6b57dd'
  },
});
