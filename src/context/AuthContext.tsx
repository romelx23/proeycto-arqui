import React, { createContext, useState } from "react";
interface authInterface{
  auth:{
    uid: string,
    nombre:string,
    correo:string,
    img:string,
    logged: boolean
  },
  setAuth:any,
  rol:string,
  setRol:any
}
export const AuthContext = createContext<authInterface>({
  auth:{
    uid:"",
    nombre:"",
    correo:"",
    img:"",
    logged: false
  },
  setAuth:()=>{},
  rol:"",
  setRol:()=>""
});

const initialState = {
  uid:"",
  img:"",
  nombre:"",
  correo:"",
  logged: false
};

export const AuthProvider = ({ children }: any) => {

  const [auth, setAuth] = useState(initialState);
  const [rol, setRol] = useState("")

  const login = () => {};

  const register = () => {};

  const verificarToken = () => {};

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        rol,
        setRol
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
