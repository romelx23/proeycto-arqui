import React from 'react'
import { View, Text, StyleSheet,StatusBar } from 'react-native'
export interface AuxProps  { 
    children: React.ReactNode
 }

export const Layout=(props:AuxProps)=> {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor='#333'/>
            {props.children}
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:'#4e8bb4',
        flexDirection:'column',
        alignItems:'center',
        position: 'relative',
    }
})