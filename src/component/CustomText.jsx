import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

const CustomText = ({
  children,
  style,
  size = RFValue(12),
  color = 'white',
  fontWeight = 'normal',
  opacity = 1,
  ...props
}) => {
  return (
    <Text
      style={{
        fontSize: size,
        color,
        fontWeight,
        opacity,
      }}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({});
