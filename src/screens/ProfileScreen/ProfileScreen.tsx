import React from 'react'
import { View, Text } from 'react-native'
import ListUser from '../../components/ListUser'
import { PropsNavigationHome } from '../../interfaces/home'

export default function ProfileScreen({navigation}:PropsNavigationHome) {
    return (
        <View style={{flex:1}}>
            {/* <Text>ProfileScreen</Text> */}
            <ListUser navigation={navigation}/>
        </View>
    )
}
