export interface Productos {
    total:     number;
    productos: Producto[];
}

export interface Producto {
    precio:       number | string;
    disponible:   boolean;
    _id?:          string;
    nombre:       string;
    descripcion?: string;
    usuario?:      Categoria | string;
    categoria:    Categoria | string;
    img:          string;
    idProducto:string,
    mac: string,
    activo: boolean
}

export interface Categoria {
    _id:    ID;
    nombre: Nombre;
}

export enum ID {
    The6123F92C3F23552D84Bc7581 = "6123f92c3f23552d84bc7581",
    The6123F94B3F23552D84Bc7585 = "6123f94b3f23552d84bc7585",
    The6129B2E802Ee332D10A52891 = "6129b2e802ee332d10a52891",
}

export enum Nombre {
    Jabones = "JABONES",
    Romel1 = "romel1",
    Romel2 = "romel2",
}

//? INTERFACE PARA CARGAR LA IMAGEN :'C

export interface InterfaceImagePicker {
    uri: string,
    type: string,
    cancelled: boolean,
    height: number,
    width : number,
}

export interface InterfaceStateImage {
    localUri: string
}

export interface File {
    uri: any,
    type: string | undefined,
    name: string,
}


//? respuesta de cloudinary
export interface InterfaceRespuestaCloudinary {
    public_id : string,
    url: string,
    secure_url : string,

}