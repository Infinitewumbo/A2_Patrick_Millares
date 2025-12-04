import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Keyboard, ActivityIndicator, TouchableOpacity } from 'react-native';
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

const convertCurrency = async () => {
    Keyboard.dismiss();
    setResult(null); // Reset previous result

    if (!validateInput()) return;

    setLoading(true);
    
    // REPLACE THIS with your actual API key
    const API_KEY = 'your_freecurrencyapi_key_here'; 

    try {
      const response = await fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${base}&currencies=${destination}`
      );

      const data = await response.json();

      // Handle API errors (if data.errors exists or if the specific currency is missing)
      if (data.errors) {
        throw new Error('Invalid API Key or API limit reached.');
      }
      
      if (!data.data || !data.data[destination]) {
        throw new Error(`Rate for ${destination} not found.`);
      }

      const rate = data.data[destination];
      const convertedValue = (parseFloat(amount) * rate).toFixed(2);

      setResult({
        converted: convertedValue,
        rate: rate,
        symbol: destination
      });

    } catch (error) {
      console.error(error); 
      let msg = 'Network request failed. Please check your internet connection.';
      if (error.message) {
        msg = error.message;
      }
      Alert.alert('Conversion Failed', msg);
    } finally {
      setLoading(false);
    }
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
      
      <TouchableOpacity 
        style={[styles.convertButton, loading && styles.buttonDisabled]} 
        onPress={convertCurrency}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Converting...' : 'Convert Currency'}
        </Text>
      </TouchableOpacity>

     {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {amount} {base} =
          </Text>
          <Text style={styles.convertedText}>
            {result.converted} {result.symbol}
          </Text>
          <Text style={styles.rateText}>Rate: 1 {base} = {result.rate} {result.symbol}</Text>
        </View>
      )}

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
  container: { 
    flex: 1, 
    padding: 24, 
    backgroundColor: '#f0f2f5', 
    justifyContent: 'center' 
  },
  header: { 
    fontSize: 32, 
    fontWeight: '800', 
    color: '#1f2937', 
    marginBottom: 40, 
    textAlign: 'center',
    letterSpacing: -1, 
  },
  convertButton: {
    backgroundColor: '#4f46e5', 
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    shadowColor: '#4f46e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#a5b4fc', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  loader: { 
    marginTop: 20 
  },
  resultContainer: { 
    alignItems: 'center', 
    padding: 24, 
    backgroundColor: '#fff', 
    borderRadius: 20, 
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  resultText: { 
    fontSize: 16, 
    color: '#6b7280', 
    marginBottom: 5 
  },
  convertedText: { 
    fontSize: 36, 
    fontWeight: '900', 
    color: '#111827', 
  },
  rateText: { 
    fontSize: 12, 
    color: '#9ca3af', 
    marginTop: 10 
  },
  spacer: { 
    flex: 1 
  },
});

export default MainScreen;