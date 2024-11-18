import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from './component/CustomHeader';

const MetaAI = () => {
  
  return (
    <ImageBackground
      source={require('./assets/w_bg.png')}
      style={styles.container}
      resizeMode="cover">
      <CustomHeader />
      
    </ImageBackground>
  );
};

export default MetaAI;

const styles = StyleSheet.create({container: {flex: 1}});
