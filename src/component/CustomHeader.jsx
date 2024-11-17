import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
          <Text>asdlfjasldfjlasdjflajsd</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
