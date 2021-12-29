import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem,DrawerItemList } from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  Avatar,
  Caption,
  Drawer,
  Paragraph,
  Title,
  TouchableRipple,
  Switch
} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../context/AuthContext";
import i18n from "./../utils/i18n.config";
import { themeContext } from "../context/themeContext";
import AppLoading from "expo-app-loading";
import { fetchFont } from "../helpers/fetchFonts";
import { fontContext } from "../context/FontContext";

export default function CustomDrawer(props: DrawerContentComponentProps) {

  const { auth, setAuth, rol } = useContext(AuthContext);
  const { setTema, tema } = useContext(themeContext);
  const [fontloaded, setFontloaded] = useState(false)
  const { nombre, correo, img } = auth;
  const togleTheme = () => {
    setTema(!tema)
  }

  const { fuente } =useContext<any>(fontContext);

  if (!fontloaded) {
    return <AppLoading
    startAsync={fetchFont}
    onError={()=>console.log('Error font dont loaded')}
    onFinish={()=>{
      setFontloaded(true)
    }}
    />;
  }
 
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "column", marginTop: 15 }}>
              <Avatar.Image
                source={{ uri: (img) ? img : "https://swimg.com/wp-content/uploads/not-available.jpg" }}
                size={60}
              />
              <View style={{
                // marginLeft: 15,
                paddingRight: 30,
                flexDirection: "column",
                // backgroundColor:'#6b6767',
                width: '100%'
              }}>
                <Title
                  adjustsFontSizeToFit
                  numberOfLines={3}
                  style={styles.title}>{nombre}</Title>
                <Caption style={styles.caption}>{correo}</Caption>
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
          <DrawerItemList {...props}/>
          {/* <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="home" color={'#fff'} size={size} />
              )}
              labelStyle={{ color: '#fff', fontFamily: fuente, fontSize:15 }}
              label={`${i18n.t("Inicio")}`}
              onPress={() => {
                props.navigation.navigate("Task App");
              }}
            />
            {
              rol === "ADMIN_ROLE" ? (<>
                <DrawerItem
                  icon={({ color, size }) => (
                    <FontAwesome name="user" color={'#fff'} size={size} />
                  )}
                  labelStyle={{ color: '#fff', fontFamily: fuente, fontSize:15 }}
                  label={`${i18n.t("Usuarios")}`}
                  onPress={() => {
                    props.navigation.navigate("Profile");
                  }}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <FontAwesome name="bookmark" color={'#fff'} size={size} />
                  )}
                  labelStyle={{ color: '#fff', fontFamily: fuente, fontSize:15 }}
                  label={`${i18n.t("Roles")}`}
                  onPress={() => {
                    props.navigation.navigate("role");
                  }} /></>)
                :
                <></>
            }
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="cogs" color={'#fff'} size={size} />
              )}
              labelStyle={{ color: '#fff', fontFamily: fuente, fontSize:15 }}
              label={`${i18n.t("Configuración")}`}
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="phone" color={'#fff'} size={size} />
              )}
              labelStyle={{ color: '#fff', fontFamily: fuente, fontSize:15 }}
              label={`${i18n.t("Soporte")}`}
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
            />
          </Drawer.Section> */}
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => { togleTheme() }}
            >
              <View style={styles.preference}>
                <Text style={{color:'#fff'}}>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch
                    value={tema}
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="sign-out-alt" color={'#fff'} size={size} />
            )}
            labelStyle={{ color: '#fff', fontFamily: fuente, fontSize:15 }}
            label={`${i18n.t("Cerrar Sesión")}`}
            onPress={async () => {
              await setAuth({
                nombre: "",
                correo: "",
                img: "https://swimg.com/wp-content/uploads/not-available.jpg",
                logged: false
              })
              AsyncStorage.clear();
              props.navigation.replace("login");
            }}
          />
        </View>
      </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
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
    alignItems:'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'Pacifico'
  }
});
