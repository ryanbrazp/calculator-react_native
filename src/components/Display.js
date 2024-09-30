import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Display = ({ operation, result }) => {
    return (
        <View style={styles.displayContainer}>
            <Text style={styles.operationText}>{operation}</Text>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    displayContainer: {
        backgroundColor: '#323232',
        gap: 16,
        paddingTop: 16,
        paddingBottom: 16,
        width: '100%', // Opcional: para ajustar a largura
    },
    operationText: {
        fontSize: 20,
        textAlign: 'right',
        color: '#FFFFFF', // Alterar a cor do texto para melhor visibilidade
    },
    resultText: {
        fontSize: 36,
        fontWeight: 'bolder',
        textAlign: 'right',
        color: '#FFFFFF', // Alterar a cor do texto para melhor visibilidade
    },
});

export default Display;