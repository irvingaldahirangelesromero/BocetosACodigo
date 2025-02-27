import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

type propiedades = {
    titulo: string,
    nombre: string,
    imagen: any,
}

const Header = (props:propiedades) => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Menú</Text>
        {/* Icono de perfil de usuario */}
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3b82f6",
    width: "100%",
    padding: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

})

