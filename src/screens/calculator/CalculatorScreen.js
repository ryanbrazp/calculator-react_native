import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../../components/Display';
import InputFields from '../../components/InputFields';
import ActionButtons from '../../components/ActionButtons';

const CalculatorScreen = () => {
    const [firstInputValue, setFirstInputValue] = useState('');
    const [secondInputValue, setSecondInputValue] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState("0");

    const calculateResult = () => {
        const num1 = parseFloat(firstInputValue);
        const num2 = parseFloat(secondInputValue);
        let res;

        switch (operation) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case 'x':
                res = num1 * num2;
                break;
            case '/':
                res = num2 !== 0 ? num1 / num2 : 'Erro';
                break;
            default:
                res = 'Operação inválida';
        }
        setResult(res);
    };

    const clearFields = () => {
      setFirstInputValue('');
      setSecondInputValue('');
      setOperation('');
      setResult("0");
    };

    return (
        <View style={styles.container}>
            <Display operation={`${firstInputValue} ${operation} ${secondInputValue}`} result={result} />
            <InputFields 
                firstInputValue={firstInputValue} 
                setFirstInputValue={setFirstInputValue} 
                secondInputValue={secondInputValue} 
                setSecondInputValue={setSecondInputValue} 
                setOperation={setOperation} 
            />
            <ActionButtons onCalculate={calculateResult} onClear={clearFields}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 8,
        backgroundColor: '#323232',
        height: '100vh'
    }
});

export default CalculatorScreen;