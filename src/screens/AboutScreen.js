import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About This App</Text>
      <Text style={styles.text}>Developed by: Patrick Millares</Text>
      <Text style={styles.text}>Student ID: 101205106</Text>
      <Text style={styles.text}>
        This app converts currencies using the FreeCurrencyAPI.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f2f5', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 24, 
  },
  header: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#1f2937',
    marginBottom: 30, 
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    marginBottom: 30,
  },
  label: { 
    fontSize: 12, 
    color: '#6b7280', 
    textTransform: 'uppercase', 
    letterSpacing: 1, 
    marginTop: 15,
  },
  value: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: '#111827', 
    marginTop: 5,
  },
  description: { 
    paddingHorizontal: 10,
  },
  text: { 
    fontSize: 16, 
    textAlign: 'center', 
    lineHeight: 26, 
    color: '#4b5563', 
  }
});

export default AboutScreen;