import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Keyboard } from 'react-native';
import LabeledInput from '../components/LabeledInput';

const MainScreen = ({ navigation }) => {
  const [base, setBase] = useState('CAD');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('1');
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

    const validateInput = () => {
        const currencyRegex = /^[A-Z]{3}$/;
        
        if (!currencyRegex.test(base)) {
        Alert.alert('Validation Error', 'Base currency must be 3 letters (e.g., CAD).');
        return false;
        }
        if (!currencyRegex.test(destination)) {
        Alert.alert('Validation Error', 'Destination currency must be 3 letters (e.g., USD).');
        return false;
        }
        if (isNaN(amount) || parseFloat(amount) <= 0) {
        Alert.alert('Validation Error', 'Amount must be a positive number.');
        return false;
        }
        return true;
    };

    const convertCurrency = () => {
        Keyboard.dismiss(); // Hides keyboard when button clicked
        if (!validateInput()) return;

        // Temporary alert to prove it works
        Alert.alert("Success", "Inputs are valid! API call coming next.");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency Converter</Text>
      
      <LabeledInput 
        label="Base Currency" 
        value={base} 
        onChangeText={(text) => setBase(text.toUpperCase())} 
        placeholder="e.g. CAD"
      />
      
      <LabeledInput 
        label="Destination Currency" 
        value={destination} 
        onChangeText={(text) => setDestination(text.toUpperCase())} 
        placeholder="e.g. USD"
      />

      <LabeledInput 
        label="Amount" 
        value={amount} 
        onChangeText={setAmount} 
        placeholder="1.00"
        keyboardType="numeric"
      />
      
       <View style={styles.buttonContainer}>
        <Button 
          title="Convert" 
          onPress={convertCurrency} 
        />
      </View>

      <View style={styles.spacer} />
      
      <Button 
        title="About Application" 
        color="gray"
        onPress={() => navigation.navigate('About')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  spacer: { marginTop: 20 },
  buttonContainer: { marginTop: 10, marginBottom: 20 },
});

export default MainScreen;