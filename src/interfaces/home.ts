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
    // item : FormaItem,
    
    navigation? : Navigation
  }

export interface Navigation {
    goBack?: Function,
    addListener?: Function,
    canGoBack?: Function,
    dispatch?: Function,
    getParent?: Function,
    getState?: Function,
    isFocused?: Function,
    navigate?: Function,
    pop?: Function,
    popToTop?: Function,
    push?: Function,
    removeListener?: Function,
    replace?: Function,
    reset?: Function,
    setOptions?: Function,
    setParams?: Function,
}

export interface PropsNavigationHome {
    navigation: Navigation
}

export interface params{
    item: Producto
}

export interface Route{

    key: string,
    name: string,
    params: params,
    path?: string,

}



export interface PropsRouteDetalle{
    route: Route,
}


export interface PropsAgregarProducto {
    navigation: Navigation
}