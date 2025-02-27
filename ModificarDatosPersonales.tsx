import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const UserProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    console.log("Datos guardados:", { name, email, phone, address });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Editar Perfil</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          value={address}
          onChangeText={setAddress}
        />
        <Button title="Guardar" onPress={handleSave} />
      </View>
      <View style={styles.footer}>
        <AntDesign name="home" size={24} color="white" style={styles.icon} />
        <AntDesign name="setting" size={24} color="white" style={styles.icon} />
        <AntDesign name="user" size={24} color="white" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#3b82f6",
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  footer: {
    backgroundColor: "#3b82f6",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default UserProfileForm;
