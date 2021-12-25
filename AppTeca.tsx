import React from 'react'
import { AuthProvider } from './src/context/AuthContext'
import FontProvider from './src/context/FontContext'
import { ProductosProvider } from './src/context/ProductosContext'
import { RoleProvider } from './src/context/RoleContext'
import ShowProvider from './src/context/ShowMessage'
import TemaProvider from './src/context/themeContext'
import AppRouter from './src/Router/AppRouter'

const AppTeca = () => {
    return (
        <AuthProvider>
            <ProductosProvider>
                <RoleProvider>
                    <TemaProvider>
                        <FontProvider>
                            <ShowProvider>
                                <AppRouter></AppRouter>
                            </ShowProvider>
                        </FontProvider>
                    </TemaProvider>
                </RoleProvider>
            </ProductosProvider>
        </AuthProvider>
    )
}

export default AppTeca

