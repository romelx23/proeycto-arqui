import React, { createContext, useState } from "react";

const AuthContext = createContext({});

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }: any) => {
  // const login = async ( email, password ) => {

  //     const resp = await fetchSinToken("login", { email, password }, "POST");

  //     if( resp.ok ){
  //         localStorage.setItem('token', resp.token);
  //         const { usuarioDB } = resp;
  //         setAuth({
  //             uid: usuarioDB?.uid,
  //             checking : false,
  //             logged: true,
  //             name: usuarioDB.nombre,
  //             email: usuarioDB.email,
  //         })

  //         console.log("AUTENTICADO")

  //     }
  //     return resp.ok;

  // }

  // const register = async (nombre, email, password ) => {

  //     const resp = await fetchSinToken("login/new", {nombre, email, password},"POST");
  //     console.log(resp);

  //     if( resp.ok ){
  //         localStorage.setItem('token', resp.token);
  //         const { usuario } = resp;
  //         setAuth({
  //             uid: usuario?.uid,
  //             checking : false,
  //             logged: true,
  //             name: usuario.nombre,
  //             email: usuario.email,
  //         })

  //         console.log("AUTENTICADO")
  //         return true;
  //     }
  //     return resp.msg;

  // }

  // const verificaToken = useCallback(
  //     async () => {

  //         const token = localStorage.getItem("token");

  //         if( !token ){

  //             setAuth({
  //                 uid: null,
  //                 checking : false,
  //                 logged: false,
  //                 name:null,
  //                 email: null,
  //             })

  //             return false;
  //         }

  //         const resp = await fetchConToken('login');

  //         if( resp.ok ){
  //             localStorage.setItem('token', resp.token);
  //             const { usuario } = resp;
  //             setAuth({
  //                 uid: usuario?.uid,
  //                 checking : false,
  //                 logged: true,
  //                 name: usuario?.nombre,
  //                 email: usuario?.email,
  //             })

  //             console.log("AUTENTICADO")
  //             return true;
  //         }else{
  //             setAuth({
  //                 uid: null,
  //                 checking : false,
  //                 logged: false,
  //                 name:null,
  //                 email: null,
  //             })
  //             return false;
  //         }
  //     },
  //     [],
  // )

  // const logout = () =>{

  //     localStorage.removeItem('token');
  //     dispatch({
  //         type:types.cerrarSession
  //     })
  //     setAuth({
  //         checking : false,
  //         logged: false,
  //     })

  // }

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
        login,
        register,
        verificarToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
