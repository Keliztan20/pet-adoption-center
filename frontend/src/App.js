import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5ff',
  },
});

export default App;