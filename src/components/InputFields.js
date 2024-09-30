import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput } from "@react-native-material/core";

const InputFields = ({ firstInputValue, setFirstInputValue, secondInputValue, setSecondInputValue, setOperation }) => {
    const handleFirstInputChange = (text) => {
        setFirstInputValue(text);
    };

    const handleSecondInputChange = (text) => {
        setSecondInputValue(text);
    };

    const handleButtonPress = (value) => {
        setOperation(value);
    };

    return (
        <View style={styles.container}>
            <View style={styles.fields}>
                <TextInput 
                    variant="outlined" 
                    value={firstInputValue}  
                    onChangeText={handleFirstInputChange} 
                    placeholder="Primeiro valor"
                />
                <TextInput 
                    variant="outlined" 
                    value={secondInputValue} 
                    onChangeText={handleSecondInputChange} 
                    placeholder="Segundo valor"
                />
            </View>
            <View style={styles.containerBtn}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('x')}>
                        <Text style={styles.buttonText}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
                        <Text style={styles.buttonText}>÷</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    },
    fields: {
        flexGrow: 1,
        gap: 8
    },
    containerBtn: {
        gap: 8
    },
    buttons: {
        flexDirection: 'row',
        gap: 8
    },
    button: {
        width: 58,
        height: 58,
        backgroundColor: '#FE8D01',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20
    }
});

export default InputFields;