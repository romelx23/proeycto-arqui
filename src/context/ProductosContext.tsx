import React, { createContext, useReducer, useState } from 'react'
import { getUsuarios } from '../helpers/apiUsuarios';
import { getProductos } from '../helpers/fetch';
import { Producto, Productos } from '../interfaces/producto';
import { InterfaceProductoContextValue } from '../interfaces/productoContext';
import { user, userReq } from '../interfaces/user';
import { productoReducer } from './productosReducer';

export const ProductosContext = createContext({});

export const ProductosProvider = ({ children }: any) => {

    // const [productoState, dispatch] = useReducer<any>(productoReducer, initialState)

    const [productos, setProductos] = useState<Producto[]>([]);
    const [usuario, setUsuarios] = useState<user[]>([]);

    const cargarProductos = async () => {
        try {
            const data: Productos = await getProductos();
            setProductos(data.productos);
        } catch (error) {
            console.log(error);
        }
    }
    const cargarUsuario = async () => {
        try {
            const data: userReq = await getUsuarios();
            setUsuarios(data.usuario);
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <ProductosContext.Provider

            value={{
                productos,
                setProductos,
                cargarProductos,
                cargarUsuario,
                usuario
            }}
        >
            {children}

        </ProductosContext.Provider>

    )


}