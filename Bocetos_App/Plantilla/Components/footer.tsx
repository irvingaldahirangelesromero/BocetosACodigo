import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { MaterialIcons, Entypo, Feather, FontAwesome } from "@expo/vector-icons";

type propiedades = {
    fecha: string,
    grupo: string,
}

const Footer = (props:propiedades) => {
    return (
      <View style={styles.footer}>
        <MaterialIcons name="home" size={24} color="white" /> {/* Home Icon */}
        <Feather name="settings" size={24} color="white" />{" "}
        <FontAwesome name="user" size={24} color="white" />{" "}
      </View>
    )
}

export default Footer

const styles = StyleSheet.create({

  footer: {
    backgroundColor: "#3b82f6",
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
})

