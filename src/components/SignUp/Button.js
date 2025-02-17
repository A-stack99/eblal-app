
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: '#07193D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
};

export default Button;
