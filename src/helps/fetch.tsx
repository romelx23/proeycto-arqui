
// const API = process.env.API_BASE_BACKED
const API = "https://rest-server-cafe-romel.herokuapp.com"

export const getProductos = async () =>{

    // const res = await fetch(`${API}/api/productos?limite=10`)
    try {
        
        const res  = await fetch(`${API}/api/productos?limite=10`)
        console.log(res);
        return await res.json();
    } catch (error) {
        
        throw new Error("Algo salio mal en el fetch")
    }

}