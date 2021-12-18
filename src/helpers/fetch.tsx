
// const API = process.env.API_BASE_BACKED

import { Producto } from "../interfaces/producto";
import AsyncStorage from '@react-native-async-storage/async-storage';

const My_API = "https://node-restserver-cascaron.herokuapp.com";
// const My_API = "https://rest-server-cafe-romel.herokuapp.com"; //? Romel


export const login = async (correo: string, password: string) => {

    console.log(correo, password)

    const requestOptions: any = {
        method: 'POST',
        body: JSON.stringify({
            correo,
            password
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        redirect: 'follow'
    };


    const res = await fetch(`${My_API}/api/auth/login`, requestOptions);
    return await res.json();


}

export const loginGoogle = async ( idtoken: string) => {

    // console.log("fetch",idtoken)

    const requestOptions: any = {
        method: 'POST',
        body: JSON.stringify({
            "id_token": idtoken,
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        redirect: 'follow'
    };


    const res = await fetch(`${My_API}/api/auth/google`, requestOptions);
    return await res.json();


}


export const Resgistrar = async (user: object) => {

    const requestOptions: any = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        redirect: 'follow'
    };


    const res = await fetch(`${My_API}/api/usuarios`, requestOptions);
    return await res.json();


}

export const getVerificarUsuario = async () => {

    try {
        const token = await AsyncStorage.getItem("token") || "";
        console.log("token -->> perris ", token);
        const res = await fetch(`${My_API}/api/auth`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-token": token
            },
        });
        return await res.json();
    
    } catch (error) {
        throw new Error("Algo salio mal en el fetch de verificar token")
    }

  
}


export const getProductos = async () => {

    try {
        const res = await fetch(`${My_API}/api/productos?limite=10`)
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch")
    }
}

export const saveProducto = async (producto: Producto, img: string) => {

    try {
        
        const token = await AsyncStorage.getItem('token') || "";
        const res = await fetch(`${My_API}/api/productos`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify({
            ...producto,
            img
        })
    });
    return await res.json();

    } catch (error) {
        console.log("Problemas en catch de guardar productos fetch.jsx",error)

    }

    

}

export const getProductbyId=async(idproduct:string)=>{
    try {
        const res = await fetch(`${My_API}/api/productos/${idproduct}`)
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch")
    }
}

export const updateProducto = async (id:string,producto: Producto,img:string) => {
    const {img:image,...product}=producto
    // console.log("El producto actualizado" + producto,img)
    console.log(product)
    const token = await AsyncStorage.getItem('token') || "";
    const res = await fetch(`${My_API}/api/productos/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-token": token
        },
        body: JSON.stringify({
            ...product,
            img
        })
    });
    return await res.json();

}

export const deleteProducto = async (id:string) => {

    try {
        const token = await AsyncStorage.getItem('token') || "";
        const res = await fetch(`${My_API}/api/productos/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-token": token
            },
        });
    return await res.json();
    } catch (error) {
        console.log("ESTE ES UN ERROR EN EL CATH",error)
    }

    

}