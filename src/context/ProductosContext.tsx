import React, { createContext, useReducer, useState } from 'react'
import { getProductos } from '../helpers/fetch';
import { Producto, Productos } from '../interfaces/producto';
import { InterfaceProductoContextValue } from '../interfaces/productoContext';
import { productoReducer } from './productosReducer';

export const ProductosContext = createContext({});



export const ProductosProvider = ({children} : any) =>{

    // const [productoState, dispatch] = useReducer<any>(productoReducer, initialState)

    const [productos , setProductos] = useState<Producto[]>([]);

    const cargarProductos = async () => {
        const data : Productos = await getProductos();
        setProductos(data.productos);
    }

    return(

        <ProductosContext.Provider
        
            value = {{
                productos,
                setProductos,
                cargarProductos
            }}
        >   
        {children}

        </ProductosContext.Provider>

    )


}