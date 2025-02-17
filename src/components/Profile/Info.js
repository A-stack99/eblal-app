import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileInfo = ({ user, setUser, openImagePicker }) => {
  return (
    <View style={styles.profileInfo}>
      <TouchableOpacity onPress={openImagePicker} style={{ zIndex: 1 }}>
        <Image source={require('../../assests/images/camera1.png')} style={styles.camera} />
      </TouchableOpacity>
      <Image
        source={user?.profileImage ? { uri: user.profileImage } : require('../../assests/images/Dentist.png')}
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.userName}>{user?.name}</Text>
        <Text style={styles.userEmail}>License No. {user?.licenseNo ? user.licenseNo : 'Not Available'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 28,
    left: 70,
  },
  camera: {
    right: -55,
    top: 15,
    width: 28, height: 28
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: -30,
    marginBottom: 18,
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 5,
    marginLeft: 14,
  },
  userEmail: {
    fontSize: 16,
    color: "white",
    marginLeft: 15,
    top: -8,
  },
});

export default ProfileInfo;
