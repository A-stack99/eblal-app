import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiniStats = ({ label, value }) => {
  return (
    <View style={styles.mini}>
      <Text style={{ fontSize: 15 }}>{label}</Text>
      <Text style={styles.miniBox}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mini: {
    alignItems: 'center',
    fontFamily: 'Poppins',
    fontSize: 20,
  },
  miniBox: {
    backgroundColor: '#FFFFFF',
    width: 110,
    height: 50,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: 10,
    marginRight: 5,
  },
});

export default MiniStats;

