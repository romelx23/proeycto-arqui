import React from 'react'
import { View, Text, Button } from 'react-native'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { PropsAgregarProducto } from '../../interfaces/home';


const AgregarProducto = ({navigation} : PropsAgregarProducto) => {


    const handleCargarImagen = ()=>{

        const options = {
           storageOptions:{
               path: "images",
               mediaType:"photo",
           },
           includeBase64: true,
        };

        // launchCamera( options , (response)=>{

        //     console.log("response = ", response);
        //     if(response.didCancel){
        //         console.log("cacelo subida de imagen")
        //     } else if( response.errorCode ){
        //         console.log("ocurrio u error Code")
        //     }else {
        //         const source = {uir: 'data:image/jpeg; base64'+ response.base64}
        //     }


        // } )


        //** */
        // launchCamera();
        // launchImageLibrary();


    }


    return (
        <View>
            <Text>AgregarProducto</Text>
            <Button
                title="buscar imagen"
                onPress={ handleCargarImagen }
            ></Button>
        </View>
    )
}

export default AgregarProducto
