import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      
      {/* Navigation Button */}
      <View style={{ marginTop: 20 }}>
        <Button 
          title="About" 
          onPress={() => navigation.navigate('About')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' }
});

export default MainScreen;