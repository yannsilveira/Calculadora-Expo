import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View style={styles.topo}>
        <Text style={styles.txttitulo}>Calculadora 1.0</Text>
    </View>
);


const styles = StyleSheet.create({
    topo: {
        width: '100%',
        backgroundColor: '#2196f3',
        padding: 12,
        alignItems: 'center',
    },

    txttitulo: {
        fontSize: 25,
        color: '#FFF', 
    }
});