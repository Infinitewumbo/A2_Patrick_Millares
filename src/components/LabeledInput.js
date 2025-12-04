import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LabeledInput = ({ label, value, onChangeText, placeholder, keyboardType }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#6b7280', 
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 4,
    textTransform: 'uppercase', 
    letterSpacing: 1,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb', 
    borderRadius: 12, 
    padding: 15,
    fontSize: 18,
    color: '#1f2937', 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
});

export default LabeledInput;