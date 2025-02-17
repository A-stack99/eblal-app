import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => onPress(item.title)}>
      <Image source={item.image} style={styles.icon} />
      <Text style={styles.listText}>{item.title}</Text>
      <FontAwesome name='angle-right' size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 2,
    marginTop: 3,
    backgroundColor: "white",
  },
  listText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
    marginLeft: 20,
  },
  icon: {
    width: 22,
    height: 22,
  },
});

export default ListItem;
