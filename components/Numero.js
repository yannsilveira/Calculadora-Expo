import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
    <TextInput
        style={styles.numero}
        value={props.num}
        onChangeText={valorcampo => props.atualizaValor(props.nome, valorcampo)}
        placeholder="Infome um número"
        keyboardType="numbers-and-punctuation"
    />
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20,
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        justifyContent: 'center'
    }
});