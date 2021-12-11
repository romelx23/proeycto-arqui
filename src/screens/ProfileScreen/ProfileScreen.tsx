import React from 'react'
import { View, Text } from 'react-native'
import ListUser from '../../components/ListUser'

export default function ProfileScreen() {
    return (
        <View style={{flex:1}}>
            <Text>ProfileScreen</Text>
            <ListUser/>
        </View>
    )
}
