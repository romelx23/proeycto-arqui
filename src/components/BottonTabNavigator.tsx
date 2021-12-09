import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import HomeScreen from '../screens/Home/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import CardScreen from '../screens/Card/CardScreen';
import AgregarProducto from '../screens/Home/AgregarProducto'

const Tab = createBottomTabNavigator()

export default function BottonTabNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={{
             headerShown: false,    
             tabBarStyle:{
                 position: 'absolute',
                 bottom: 10,
                //  left: 20,
                //  right: 20,
                //  width:'80%',
                paddingHorizontal:20,
                 alignSelf:'center',
                 backgroundColor:'transparent',
                 shadowOffset:{width:0,height:0},
                 shadowColor:'transparent',
                 borderColor:'transparent',
                 borderWidth:0,
                 height: 60,
                 elevation:0
                //  ...styles.shadow
             }
         }}
        >
            <Tab.Screen name="HomeStack" component={HomeScreen} options={{
                tabBarActiveBackgroundColor:'#78c858',
                tabBarInactiveBackgroundColor:'#6e3fda',
                tabBarItemStyle:{
                    borderTopLeftRadius:40,
                    borderBottomLeftRadius:40,
                    display: 'flex',
                },
                tabBarIcon: ({ focused,color }) => (
                    <Icon name="home" size={30} color={focused ? color : '#ffffff'} />
                ),
                tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>
            }}
            />
            <Tab.Screen name="BookStack" component={AgregarProducto} options={{
                tabBarActiveBackgroundColor:'#78c858',
                tabBarInactiveBackgroundColor:'#6e3fda',
                tabBarItemStyle:{
                    borderRightColor:'#ffffff',
                    borderLeftColor:'#ffffff',
                    borderLeftWidth:.5,
                    borderRightWidth:.5
                },
                tabBarIcon: ({ focused,color }) => (
                    <Icon name="plus-circle" size={30} color={focused ? color : '#ffffff'} />
                ),
                tabBarLabel: () => <Text style={styles.tabBarLabel}>Book Room</Text>
            }}
            />
            <Tab.Screen name="ContactStack" component={ProfileScreen} options={{
                title:'Profile Screen',
                tabBarActiveBackgroundColor:'#78c858',
                tabBarInactiveBackgroundColor:'#6e3fda',
                tabBarItemStyle:{
                    borderTopRightRadius:40,
                    borderBottomRightRadius:40,
                },
                tabBarIcon: ({ focused,color }) => (
                    <Icon name="user" size={30} color={focused ? color : '#ffffff'} />
                ),
                tabBarLabel: () => <Text style={styles.tabBarLabel}>Contact Us</Text>
            }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarLabel: {
      color: '#292929',
      fontSize: 12,
    },
    shadow:{
        shadowColor:'#7f5df0',
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
  })
  