// LinkText.js
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LinkText = ({ text, linkText, onLinkPress }) => {
  return (
    <Text style={styles.bottomLine}>
      {text}
      <TouchableOpacity onPress={onLinkPress}>
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    </Text>
  );
};

const styles = {
  bottomLine: {
    flexDirection: 'row',
    textAlign:'center',
    marginTop: 10,
    padding: 10,
    fontSize: 15,
    lineHeight: 14,
    color: 'black',
    marginBottom: 10,
  },
  link: {
    color: '#07193D90',
    fontWeight: 'bold',
    lineHeight: 18,
  },
};

export default LinkText;
