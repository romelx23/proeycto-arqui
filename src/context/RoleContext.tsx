import React, { createContext, useState } from 'react'
import { getRoles } from '../helpers/fetchRole';
import { Role, RoleElement } from '../interfaces/Role';

interface RoleContextProps{
    roles: RoleElement[],
    setRoles: ()=>{},
    getRoles2: ()=>{},
    AgregarRole2: ()=>{},
    ActualizarRole2: ()=>{},
    EliminarRole2: ()=>{},
}

export const RoleContext = createContext<RoleContextProps>({} as RoleContextProps );

interface Props {
    children: React.ReactNode
}


export const RoleProvider = ({ children }: Props) => {

    const [roles, setRoles] = useState<RoleElement[]>([])

    const getRoles2 = async () => {
        const {roles} = await getRoles();
        setRoles(roles);
    }

    const AgregarRole2 = async () => {

        

    }

    const ActualizarRole2 = async () => {

    }

    const EliminarRole2 = async () => {

    }
    return (
        <RoleContext.Provider
            value={{
                roles,
                setRoles,
                getRoles2,
                AgregarRole2,
                ActualizarRole2,
                EliminarRole2,
            }}
        >
            {children}
        </RoleContext.Provider>
    )

}