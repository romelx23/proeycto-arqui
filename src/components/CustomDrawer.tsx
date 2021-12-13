import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Title,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const paperTheme = useTheme();
  console.log(paperTheme.dark);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://media.discordapp.net/attachments/847958546842517546/919001445502693397/63080267.png",
              }}
              size={50}
            />
            <View style={{ marginLeft: 15, flexDirection: "column" }}>
              <Title style={styles.title}>John Doe</Title>
              <Caption style={styles.caption}>@j_doe</Caption>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                100
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="home" color={'#fff'} size={size} />
            )}
            labelStyle={{color:'#fff'}}
            label="Inicio"
            onPress={() => {
              props.navigation.navigate("Task App");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="user" color={'#fff'} size={size} />
            )}
            labelStyle={{color:'#fff'}}
            label="Usuarios"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="bookmark" color={'#fff'} size={size} />
            )}
            labelStyle={{color:'#fff'}}
            label="Bookmarks"
            onPress={() => {
              props.navigation.navigate("BookmarkScreen");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="cogs" color={'#fff'} size={size} />
            )}
            labelStyle={{color:'#fff'}}
            label="Settings"
            onPress={() => {
              props.navigation.navigate("SettingsScreen");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="phone" color={'#fff'} size={size} />
            )}
            labelStyle={{color:'#fff'}}
            label="Support"
            onPress={() => {
              props.navigation.navigate("SupportScreen");
            }}
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
        <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="phone" color={'#fff'} size={size} />
            )}
            labelStyle={{color:'#fff'}}
            label="Cerrar Sesión"
            onPress={() => {
              props.navigation.navigate("login");
              AsyncStorage.clear()
            }}
          />
      </View>
    </DrawerContentScrollView>
  );
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
    fontWeight: "bold",
    color: "#fff",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#fff'
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
    color: "#fff",
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
