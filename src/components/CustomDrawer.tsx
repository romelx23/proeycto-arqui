import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
    Avatar,
    Caption,
    Drawer,
    Paragraph,
    Title,
    TouchableRipple,
    useTheme
} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function CustomDrawer(props: DrawerContentComponentProps) {
    const paperTheme = useTheme();
    console.log(paperTheme.dark);

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://static.wikia.nocookie.net/doblaje/images/2/2e/Lucesenelcielo017_poster.jpg/revision/latest?cb=20180212071048&path-prefix=es'
                            }}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <Title style={styles.title}>John Doe</Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Task App') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome
                                name="user"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => { props.navigation.navigate('Profile') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome
                                name="bookmark"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Bookmarks"
                        onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome
                                name="cogs"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => { props.navigation.navigate('SettingsScreen') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <FontAwesome
                                name="phone"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => { props.navigation.navigate('SupportScreen') }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple
                        // onPress={() => { toggleTheme() }}
                    >
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                {/* <Switch 
                                value={isDarkTheme}
                                 /> */}
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: '#fff'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        color: '#fff'
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
