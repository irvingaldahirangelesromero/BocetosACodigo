import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <FontAwesome name="circle" size={10} color="red" />
          </View>
          <Image source={require("../../img/llave.png")} style={styles.icon} />
          <Text style={styles.cardText}>Acceso sin llave</Text>
        </View>

        <View style={[styles.card, styles.cardBlue]}>
          <View style={styles.cardHeader}>
            <FontAwesome name="circle" size={10} color="green" />
          </View>
          <Image source={require("../../img/foolder.png")} style={styles.icon} />
          <Text style={[styles.cardText, styles.cardTextWhite]}>Registros</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <FontAwesome name="circle" size={10} color="red" />
          </View>
          <View style={styles.brightnessButtons}>
            <Image source={require("../../img/lock.png")} style={styles.icon} />
          </View>
          <Text style={styles.cardText}>Estado de la puerta : Cerrado</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <FontAwesome name="circle" size={10} color="red" />
          </View>
          <Image source={require("../../img/door.png")} style={styles.icon} />

          <Text style={styles.cardText}>Control del dispositivo IoT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#3b82f6",
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
    marginTop: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    width: "45%",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardBlue: {
    backgroundColor: "#3b82f6",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  cardText: {
    color: "#4b5563",
  },
  cardTextWhite: {
    color: "white",
  },
  brightnessControl: {
    alignItems: "center",
    marginTop: 20,
  },
  brightnessButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  brightnessButton: {
    backgroundColor: "#e5e7eb",
    padding: 10,
    borderRadius: 50,
  },
  bulbIcon: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
  },
  slider: {
    width: "80%",
    marginTop: 20,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 10,
  },
  footer: {
    backgroundColor: "#3b82f6",
    width: "100%",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
