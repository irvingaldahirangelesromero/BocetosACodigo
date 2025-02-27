import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';

// Definir la interfaz para los accesos
interface AccessEntry {
    id: string;
    user: string;
    time: string;
    status: 'granted' | 'denied';
}

// Datos simulados de accesos
const accessHistory: AccessEntry[] = [
    { id: '1', user: 'Luis Hernández', time: '2025-02-27 08:30 AM', status: 'granted' },
    { id: '2', user: 'Admin', time: '2025-02-26 10:45 PM', status: 'denied' },
    { id: '3', user: 'Invitado', time: '2025-02-26 06:15 PM', status: 'granted' },
    { id: '4', user: 'Luis Hernández', time: '2025-02-25 09:10 AM', status: 'granted' },
    { id: '5', user: 'Admin', time: '2025-02-24 11:30 PM', status: 'denied' },
];

const HistorialAccesos: React.FC = () => {
    const renderItem = ({ item }: { item: AccessEntry }) => (
        <View style={styles.card}>
            {/* Indicador de estado (punto rojo o verde) */}
            <View style={[styles.statusIndicator, item.status === 'granted' ? styles.indicatorGreen : styles.indicatorRed]} />
            
            <View style={styles.itemText}>
                <Text style={styles.itemTitle}>{item.user}</Text>
                <Text style={styles.itemSubtitle}>{item.time}</Text>
            </View>
            <Text style={[styles.status, item.status === 'granted' ? styles.granted : styles.denied]}>
                {item.status === 'granted' ? 'Acceso Permitido' : 'Acceso Denegado'}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header con la palabra "Gestión" */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Historial</Text>
            </View>

            {/* Icono de puerta grande en el centro */}
            <View style={styles.doorContainer}>
                <FontAwesome5 name="door-closed" size={250} color="#002D73" />
            </View>

            {/* Lista de accesos */}
            <FlatList
                data={accessHistory}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />

            {/* Barra de navegación con iconos */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem}>
                    <FontAwesome name="home" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Fontisto name="player-settings" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <FontAwesome name="user" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    header: {
        backgroundColor: '#3179F7',
        paddingVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    doorContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    list: {
        marginBottom: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        position: 'absolute',
        top: 10,
        left: 10,
    },
    indicatorGreen: {
        backgroundColor: 'green',
    },
    indicatorRed: {
        backgroundColor: 'red',
    },
    itemText: {
        flex: 1,
        marginLeft: 15,
    },
    itemTitle: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    granted: {
        color: '#4CAF50',
    },
    denied: {
        color: '#FF5252',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#3179F7',
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    navItem: {
        alignItems: 'center',
    },
});

export default HistorialAccesos;
