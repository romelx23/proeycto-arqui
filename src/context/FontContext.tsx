import React, { createContext, useState } from 'react'

export const fontContext = createContext({
    fuente:'',
    setFuente(a:string){}
});
interface Props{
    children:React.ReactNode
}

export default function FontProvider({children}:Props) {
    const [fuente, setFuente] = useState('');
    return(

        <fontContext.Provider
            value = {{
                fuente,
                setFuente
            }}
        >   
        {children}

        </fontContext.Provider>

    )
}