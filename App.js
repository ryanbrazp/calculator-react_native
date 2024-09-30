import { StyleSheet, View } from 'react-native';
import CalculatorScreen from './src/screens/calculator/CalculatorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#323232'
  }
})
