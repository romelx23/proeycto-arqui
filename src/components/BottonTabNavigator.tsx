import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import HomeScreen from '../screens/Home/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import AgregarProducto from '../screens/Home/AgregarProducto'

interface Props {
    children: React.ReactNode,
    onPress: () => void
}

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }: Props) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#6e3fda',
            borderWidth: .5,
            borderColor: '#ffffff9d'
        }}>
            {children}
        </View>
    </TouchableOpacity>
)


export default function BottonTabNavigator() {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarStyle: {
                        position: "absolute",
                        bottom: 10,
                        //  left: 20,
                        //  right: 20,
                        //  width:'80%',
                        marginHorizontal: 20,
                        alignSelf: "center",
                        backgroundColor: "#6e3fda",
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: "transparent",
                        borderColor: "transparent",
                        borderWidth: 0,
                        height: 60,
                        elevation: 0,
                        borderRadius: 35,
                    },
                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={HomeScreen}
                    options={{
                        tabBarActiveBackgroundColor: "#78c858",
                        tabBarInactiveBackgroundColor: "#6e3fda",
                        tabBarItemStyle: {
                            borderTopLeftRadius: 40,
                            borderBottomLeftRadius: 40,
                            display: "flex",
                        },
                        tabBarIcon: ({ focused, color }) => (
                            <Icon name="home" size={30} color={focused ? color : "#ffffff"} />
                        ),
                        tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>,
                    }}
                />
                <Tab.Screen
                    name="AgregarTab"
                    component={AgregarProducto}
                    options={{
                        title: "",
                        unmountOnBlur: true,
                        tabBarActiveBackgroundColor: "#78c858",
                        tabBarInactiveBackgroundColor: "#6e3fda",
                        tabBarItemStyle: {
                            borderRightColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            borderLeftWidth: 0.5,
                            borderRightWidth: 0.5,
                            backgroundColor: "#6e3fda",
                        },
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                name="plus"
                                size={30}
                                color={focused ? "#e9982d" : "#ffffff"}
                            />
                        ),
                        // tabBarLabel: () => <Text style={styles.tabBarLabel}>Book Room</Text>,
                        tabBarButton: (props) => <CustomTabBarButton {...props} />,
                    }}
                />
                <Tab.Screen
                    name="ProfileTab"
                    component={ProfileScreen}
                    options={{
                        title: "Profile Screen",
                        tabBarActiveBackgroundColor: "#78c858",
                        tabBarInactiveBackgroundColor: "#6e3fda",
                        tabBarItemStyle: {
                            borderTopRightRadius: 40,
                            borderBottomRightRadius: 40,
                        },
                        tabBarIcon: ({ focused, color }) => (
                            <Icon name="user" size={30} color={focused ? color : "#ffffff"} />
                        ),
                        tabBarLabel: () => (
                            <Text style={styles.tabBarLabel}>Contact Us</Text>
                        ),
                    }}
                />
            </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
