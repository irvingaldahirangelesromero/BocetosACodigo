import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Para el ícono de huella

const SmartDoorConfig: React.FC = () => {
  const [fingerprint, setFingerprint] = useState(false);
  const [rfid, setRfid] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [pir, setPir] = useState(false);
  const [lockState, setLockState] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Configuración de los Dispositivos</Text>
      </View>

      {/* Contenedor de opciones */}
      <View style={styles.gridContainer}>
        <View style={styles.optionContainer}>
          <FontAwesome5 name="fingerprint" size={30} color="#fff" />
          <Text style={styles.optionText}>Acceso por Huella</Text>
          <Switch
            value={fingerprint}
            onValueChange={setFingerprint}
            trackColor={{ false: '#B0C4DE', true: '#4682B4' }}
            thumbColor={fingerprint ? '#1E90FF' : '#D3D3D3'}
          />
        </View>

        <View style={styles.optionContainer}>
          <FontAwesome5 name="credit-card" size={30} color="#fff" />
          <Text style={styles.optionText}>Acceso por RFID</Text>
          <Switch
            value={rfid}
            onValueChange={setRfid}
            trackColor={{ false: '#B0C4DE', true: '#4682B4' }}
            thumbColor={rfid ? '#1E90FF' : '#D3D3D3'}
          />
        </View>

        <View style={styles.optionContainer}>
          <FontAwesome5 name="list-ol" size={30} color="#fff" />
          <Text style={styles.optionText}>Acceso por Teclado</Text>
          <Switch
            value={keyboard}
            onValueChange={setKeyboard}
            trackColor={{ false: '#B0C4DE', true: '#4682B4' }}
            thumbColor={keyboard ? '#1E90FF' : '#D3D3D3'}
          />
        </View>

        <View style={styles.optionContainer}>
          <FontAwesome5 name="eye" size={30} color="#fff" />
          <Text style={styles.optionText}>Sensor PIR</Text>
          <Switch
            value={pir}
            onValueChange={setPir}
            trackColor={{ false: '#B0C4DE', true: '#4682B4' }}
            thumbColor={pir ? '#1E90FF' : '#D3D3D3'}
          />
        </View>

        <View style={styles.optionContainer}>
          <FontAwesome5 name="lock" size={30} color="#fff" />
          <Text style={styles.optionText}>Chapa Eléctrica</Text>
          <Switch
            value={lockState}
            onValueChange={setLockState}
            trackColor={{ false: '#B0C4DE', true: '#4682B4' }}
            thumbColor={lockState ? '#1E90FF' : '#D3D3D3'}
          />
        </View>
      </View>

      {/* Botón para guardar configuración */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Configuración guardada")}>
        <Text style={styles.buttonText}>Guardar Configuración</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3179F7', // Fondo azul
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#002D73', // Fondo oscuro para el encabezado
    paddingVertical: 25,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  optionContainer: {
    width: '45%',
    backgroundColor: '#003D99', // Fondo azul oscuro para cada opción
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SmartDoorConfig;
