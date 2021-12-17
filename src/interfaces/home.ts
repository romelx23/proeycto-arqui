import { Producto } from "./producto";

export interface FormaItem {
    id:number
    nombre: string,
    precio: string,
    Oferta : boolean,
    imagen: string,
    descripcion: string
}

export interface FormaListItem {

    listaItem: FormaItem[]

}

export interface PropsHomeItem {
    item : Producto,
    navigation : Navigation,
  }

export interface Navigation {
    goBack: ()=>void,
    addListener: ()=>void,
    canGoBack: ()=>void,
    dispatch: ()=>void,
    getParent: ()=>void,
    getState: ()=>void,
    isFocused: ()=>void,
    navigate: (routeName: string,{}?) => void,
    pop: ()=>void,
    popToTop: ()=>void,
    push: ()=>void,
    removeListener: ()=>void,
    replace: (routeName: string)=>void,
    reset: ()=>void,
    setOptions: ()=>void,
    setParams: ()=>void,
}

export interface PropsNavigationHome {
    navigation: Navigation
}

export interface params{
    item: Producto,
    
}

export interface Route{
    key: string,
    name: string,
    params: params,
    path?: string,
}



export interface PropsRouteDetalle{
    route: Route,
    navigation:Navigation
}


export interface PropsAgregarProducto {
    navigation: Navigation,
    route: Route,
}

export interface PropsDetalleProducto{
    route: {
        params:{
            item:ProductoDetalle
        }
    },
    navigation:Navigation
}

export interface ProductoDetalle {
    precio:       number | string;
    disponible:   boolean;
    _id:          string;
    nombre:       string;
    descripcion?: string;
    categoria:    string;
    img:          string;
}