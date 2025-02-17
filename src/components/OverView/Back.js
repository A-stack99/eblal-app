import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.back} onPress={onPress}>
      <Text>{'< Back'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    marginBottom: 10,
    width: '100%',
    height: 26,
    top: -10,
    left: 4,
    position: 'absolute',
  },
});

export default BackButton;
