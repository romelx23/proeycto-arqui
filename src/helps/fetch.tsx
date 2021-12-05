
// const API = process.env.API_BASE_BACKED

import { Producto } from "../interfaces/producto";
import AsyncStorage from '@react-native-async-storage/async-storage';

const My_API = "https://node-restserver-cascaron.herokuapp.com";
// const My_API = "https://rest-server-cafe-romel.herokuapp.com"; //? Romel

export const getProductos = async () =>{


    try {
        
        const res  = await fetch(`${My_API}/api/productos?limite=10`)

        return await res.json();
         
    } catch (error) {
        
        console.log(error)
        throw new Error("Algo salio mal en el fetch")
        
    }

}

export const saveProducto = async ( producto : Producto, img : string )=>{

 
    const token =  await AsyncStorage.getItem('token') || "";


    const res = await fetch( `${My_API}/api/productos`, {
        method : "POST",
        headers: {
            Accept : "application/json", "Content-Type":"application/json",
            "x-token": token
        },
        body: JSON.stringify( {...producto,
                                img                        
        } )
    } );
    return await res.json();

}