import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Components/header";
import Contenido from "./Components/contenido";
import Footer from "./Components/footer";


const Plantilla = () => {
    return (
        <View style={styles.container}>
            <Header titulo="Menú" nombre="" 
            imagen={require("../img/myAvatar.png")}>
            </Header>
            <Contenido></Contenido>
            <Footer fecha="Marzo 23" grupo="B"></Footer>
            
        </View>
    )
}

export default Plantilla

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
})