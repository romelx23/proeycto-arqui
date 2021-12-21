import React, { createContext, useState } from 'react'

export const themeContext = createContext({
    tema:false,
    setTema(a:boolean){}
});
interface Props{
    children:React.ReactNode
}

export default function TemaProvider({children}:Props) {
    const [tema, setTema] = useState(false);
    return(

        <themeContext.Provider
            value = {{
                tema,
                setTema
            }}
        >   
        {children}

        </themeContext.Provider>

    )
}
