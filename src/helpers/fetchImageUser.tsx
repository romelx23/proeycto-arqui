
import AsyncStorage from '@react-native-async-storage/async-storage';

const My_API = "https://node-restserver-cascaron.herokuapp.com";

export const MoificarImageUser = async (id:string, auth: any,img: any) => {

    try {
        console.log(auth);
        const { rol, nombre, correo,  } = auth;
        console.log("**************************")
        const res = await fetch(`${My_API}/api/usuarios/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                rol,
                nombre,
                correo,
                img
            })
        })
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch de Modificarimagen de usuario")
    }

}

export const MoificarNombreUser = async (id:string, auth: any,nombre: string) => {

    try {
        console.log(auth);
        // const { rol, nombre, correo,  } = auth;
        // console.log("**************************")
        const res = await fetch(`${My_API}/api/usuarios/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
               ...auth,
               nombre
            })
        })
        return await res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch de Modificarimagen de usuario")
    }

}

export const crearUsuarioConRol = async ( usuario : any ) =>{

    try {
        const res = await fetch(`${My_API}/api/usuarios`,{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                ...usuario,
                
            })
        })
        return res.json();
    } catch (error) {
        console.log(error)
        throw new Error("Algo salio mal en el fetch de crear usuario con Rol")
    }

}
