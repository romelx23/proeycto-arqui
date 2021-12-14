import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import { ProductosProvider } from './src/context/ProductosContext'
import { RoleProvider } from './src/context/RoleContext'
import ShowProvider from './src/context/ShowMessage'
import AppRouter from './src/Router/AppRouter'

const AppTeca = () => {
    return (
        <AuthProvider>
            <ProductosProvider>
                <RoleProvider>
                    <ShowProvider>
                        <AppRouter></AppRouter>
                    </ShowProvider>
                </RoleProvider>
            </ProductosProvider>
        </AuthProvider>
    )
}

export default AppTeca

