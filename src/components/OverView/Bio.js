import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BioSection = ({ title, items }) => {
  return (
    <View style={styles.bioContainer}>
      <Text style={styles.bioTitle}>{title}</Text>
      {items.map((item, index) => (
        <View key={index}>
          <Text style={styles.innerTitle}>{item.title}</Text>
          <Text style={styles.innerText}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bioTitle: {
    fontSize: 18,
    fontFamily: 'Poppins',
    lineHeight: 27,
    letterSpacing: 1,
    color: '#3C3B43',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  innerTitle: {
    fontSize: 15,
    fontFamily: 'Poppins',
    lineHeight: 18,
    letterSpacing: 1,
    color: '#3C3B43',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  innerText: {
    fontSize: 12,
    fontFamily: 'Poppins',
    lineHeight: 18,
    letterSpacing: 1,
    color: '#3C3B43',
  },
  bioContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default BioSection;
