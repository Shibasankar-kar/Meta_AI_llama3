import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: '#fff'}}>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
