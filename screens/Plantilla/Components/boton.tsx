import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";

type BotonProps = {
    titulo: string,
    onPress:()=>void,
    variante?: 'primario' | 'secundario' | 'peligro',
    estilo?: StyleProp<ViewStyle>,
    disable?: boolean,
    icono?: React.ReactNode,
    posicionIcono?: 'izquierda' | 'derecha',
}   

const Boton = (props: BotonProps) => {
    const getVariante = () => {
        switch (props.variante) {
            case 'primario':
                return styles.primario;
            case 'secundario':
                return styles.secundario;
            case 'peligro':
                return styles.peligro;
            default:
                return styles.Boton;
        }
    }
    return (
        <Pressable onPress={props.onPress}
            style={[styles.Boton, getVariante(), props.disable && styles.desabilitado]}
            disabled={props.disable}>
            {props.icono && props.posicionIcono !== 'derecha' && props.icono}
            <Text style={styles.titulo}>{props.titulo}</Text>
            {props.icono && props.posicionIcono === 'derecha' && props.icono}
        </Pressable>
    )
}

export default Boton

const styles = StyleSheet.create({
    titulo: {
        color: 'white',
    },
    Boton: {
        backgroundColor: '#4B2E1E',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 2,
        borderColor: '#4B2E1E',
    },
    primario: {
        backgroundColor: '#3F704D',
    },
    secundario: {
        backgroundColor: '#A67B58',
    },
    peligro: {
        backgroundColor: 'red',
    },

    desabilitado: {
        opacity: 0.5,
    }
    
})