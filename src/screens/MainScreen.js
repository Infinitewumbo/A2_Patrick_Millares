import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Keyboard } from 'react-native';
import LabeledInput from '../components/LabeledInput';

const MainScreen = ({ navigation }) => {
  const [base, setBase] = useState('CAD');
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('1');
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
});

export default MainScreen;