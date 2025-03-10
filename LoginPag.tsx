import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';


const LoginPag: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>ñ
        {/* Título y logo */}
        <Text style={styles.title}>Bienvenido</Text>
       {/* <Image source={require('../assets/lightbulb.png')} style={styles.logo} /> */}
        
        {/* Campos de texto */}
        <TextInput style={styles.input} placeholder="Correo electrónico" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#fff" secureTextEntry />


        {/* Botones de acción */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        {/* Enlace de olvido de contraseña */}
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3179F7', // Fondo azul para el login
  },
  loginContainer: {
    backgroundColor: '#002D73', // Fondo oscuro para el contenedor
    borderRadius: 15,
    width: '90%',
    maxWidth: 400,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#003D99',
    color: '#fff',
    fontSize: 16,
  },
  slider: {
    width: '100%',
    marginBottom: 20,
  },
  sliderLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#0066cc',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  buttonSecondary: {
    backgroundColor: '#004d99',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#80b3ff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginPag;
