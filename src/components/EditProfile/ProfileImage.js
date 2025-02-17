import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileImage = ({ profileImage, onPickImage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.getPic} onPress={onPickImage}>
        <FontAwesome name="camera" size={14} style={styles.camera} />
      </TouchableOpacity>
      <Image
        source={profileImage ? { uri: profileImage } : require('../../assests/images/Dentist.png')}
        style={styles.profileImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  getPic: {
    position: 'absolute',
    right: 125,
    top: 72,
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: '#BABABA',
    borderRadius: 50,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  camera: {
    color: "#07193D20",
    alignSelf: "center",
    top: 7,
    borderColor: "#525252",
    borderRadius: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ProfileImage;
