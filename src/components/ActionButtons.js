import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ActionButtons = ({ onCalculate, onClear }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.clearButton} onPress={onClear}>
                <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.calcButton} onPress={onCalculate}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    },
    clearButton: {
        width: 58,
        height: 58,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    calcButton:{
        flexGrow: 1,
        height: 58,
        backgroundColor: '#FE8D01',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20
    }
})

export default ActionButtons;