import React, { createContext, useState } from "react";
interface authInterface{
  auth:{
    nombre:string,
    correo:string,
    img:string
  },
  setAuth:any,
}
export const AuthContext = createContext<authInterface>({
  auth:{
    nombre:"",
    correo:"",
    img:""
  },
  setAuth:()=>{}
});

const initialState = {
  img:"",
  nombre:"",
  correo:""
};

export const AuthProvider = ({ children }: any) => {

  
  const [auth, setAuth] = useState(initialState);

  const login = () => {};

  const register = () => {};

  const verificarToken = () => {};

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
