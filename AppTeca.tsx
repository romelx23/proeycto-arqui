import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import { ProductosProvider } from './src/context/ProductosContext'
import ShowProvider from './src/context/ShowMessage'
import AppRouter from './src/Router/AppRouter'

const AppTeca = () => {
    return (
        <AuthProvider>
            <ProductosProvider>
                <ShowProvider>
                    <AppRouter></AppRouter>
                </ShowProvider>
            </ProductosProvider>
        </AuthProvider>
    )
}

export default AppTeca

