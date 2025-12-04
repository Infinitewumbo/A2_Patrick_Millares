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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 20, fontWeight: 'bold' },
  text: { fontSize: 16 }
});

export default AboutScreen;