import { Producto } from "./producto";


export interface InterfaceProductoContextValue {
    productos? : Producto[],
    setProductos? : Function | undefined,
    cargarProductos?: Function
}