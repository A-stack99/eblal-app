import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ProfileImage = ({ imageUrl }) => {
  return (
    <Image
      source={imageUrl ? { uri: imageUrl } : require('../../assests/images/Dentist.png')}
      style={styles.profileImage}
    />
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
});

export default ProfileImage;
