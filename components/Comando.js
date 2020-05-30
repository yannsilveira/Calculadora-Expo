import React, { Fragment } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default props => (
    <Fragment>
        <TouchableOpacity style={styles.calcular} onPress={props.acao}>
            <Text style={styles.text}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.limpar} onPress={props.acao2}>
            <Text style={styles.text}>Limpar</Text>
        </TouchableOpacity>
    </Fragment>
);

const styles = StyleSheet.create({
    calcular: {
        width: 200,
        height: 40,
        backgroundColor: 'blue',
        color: '#fff',
        borderRadius: 5
    },

    limpar: {
        width: 200,
        height: 40,
        backgroundColor: 'green',
        color: '#fff',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 10
    },

    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 12
    }
})