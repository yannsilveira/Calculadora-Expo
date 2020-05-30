import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput
            style={styles.visor}
            editable={false}
            value={props.resultado}
            placeholder="Resultado"
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 40,
        color: 'orange',
    }
})