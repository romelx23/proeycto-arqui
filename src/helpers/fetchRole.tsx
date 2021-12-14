
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RoleElement } from '../interfaces/Role';

const My_API = "https://node-restserver-cascaron.herokuapp.com";

export const getRoles = async () => {

    try {
        const res = await fetch(`${My_API}/api/roles`)
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch de optener roles")
    }

}

export const getRoleById = async () => {

}

export const AgregarRoleFetch = async (rol: RoleElement) => {
    const token = await AsyncStorage.getItem('token') || "";

    try {
        const res = await fetch(`${My_API}/api/roles`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-token": token
            },
            body: JSON.stringify({
                ...rol,
            })
        });
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch de agregar rol")
    }
}

export const ActualizarRoleFetch = async (rol: RoleElement) => {

    const token = await AsyncStorage.getItem('token') || "";

    try {
        const res = await fetch(`${My_API}/api/roles/${rol._id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-token": token
            },
            body: JSON.stringify({
                rol:rol.rol,
            })
        });
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch de modificar rol")
    }
}

export const EliminarRole = async (id:string) => {

    const token = await AsyncStorage.getItem('token') || "";
    const res = await fetch(`${My_API}/api/roles/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "x-token": token
        },
    });
    return await res.json();

}





