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
    item : FormaItem
  }