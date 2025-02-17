import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BoxItem = ({ title }) => {
  return (
    <TouchableOpacity style={styles.box}>
      <View style={styles.boxImage}>
        <FontAwesome
          name={title === 'Wallet' ? 'credit-card' : 'file-text-o'}
          size={24}
          style={styles.boxIcons}
        />
      </View>
      <Text style={styles.boxText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  boxImage: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    backgroundColor: '#27334E',
    borderRadius: 50,
    margin: 10,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: '#27334E',
  },
  boxIcons: {
    marginBottom: 5,
    color: '#fff',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default BoxItem;
