import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

export const showContext = createContext({
    load:false,
    setLoad(a:boolean){}
});
interface Props{
    children:React.ReactNode
}

export default function ShowProvider({children}:Props) {
    const [load, setLoad] = useState(false);
    return(

        <showContext.Provider
            value = {{
                load,
                setLoad
            }}
        >   
        {children}

        </showContext.Provider>

    )
}
