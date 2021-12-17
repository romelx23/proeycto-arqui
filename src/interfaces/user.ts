export interface user{
    nombre:string,
    correo:string,
    rol:string,
    img:string,
    uid:string,
    password:string
}

export interface userReq{
    total:number,
    usuario:user[]
}