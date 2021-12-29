
import AsyncStorage from '@react-native-async-storage/async-storage';
import { user } from '../interfaces/user';

const base_url = "https://node-restserver-cascaron.herokuapp.com";

export const getUsuarios = async () => {
    try {
        const res = await fetch(`${base_url}/api/usuarios?limit=`,{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        // console.log(res);
        return res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch")
    }
}

export const getUsuariobyId = async (id: string) => {
    try {
        const token = await AsyncStorage.getItem('token') || "";
        const res = await fetch(`${base_url}/api/usuarios/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-token": token
            },
        })
        // console.log(res);
        return res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch")
    }
}
export const UpdateUsuario = async (id: string,usuario:user,img:string) => {
    try {
        const token = await AsyncStorage.getItem('token') || "";
        const res = await fetch(`${base_url}/api/usuarios/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-token": token
            },
            body:JSON.stringify({
                ...usuario,
                img
            })
        })
        // console.log(res);
        return res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch")
    }
}