import React from 'react'
import { ProductosProvider } from './src/context/ProductosContext'
import AppRouter from './src/Router/AppRouter'

const AppTeca = () => {
    return (
        <ProductosProvider>
            <AppRouter></AppRouter>
        </ProductosProvider>
    )
}

export default AppTeca

