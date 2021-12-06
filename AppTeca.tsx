import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import { ProductosProvider } from './src/context/ProductosContext'
import AppRouter from './src/Router/AppRouter'

const AppTeca = () => {
    return (
        <AuthProvider>
            <ProductosProvider>
                <AppRouter></AppRouter>
            </ProductosProvider>
        </AuthProvider>
    )
}

export default AppTeca

