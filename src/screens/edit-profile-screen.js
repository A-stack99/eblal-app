import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ContextAPI } from '../Global/ContextAPI';

import ProfileImage from '../components/EditProfile/ProfileImage';
import TextInput from '../components/EditProfile/TextInput';
import BioInput from '../components/EditProfile/BioInput';
import PickerField from '../components/EditProfile/PickerField';
import SignatureInput from '../components/EditProfile/SignatureInput';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfile = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const { user, setUser } = useContext(ContextAPI);
  const [profile, setProfile] = useState(user);

  const saveChanges = () => {
    setUser(profile);
    navigation.goBack();
  };

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo', maxWidth: 800, maxHeight: 800 }, (response) => {
      if (response.assets) {
        setProfile({ ...profile, profileImage: response.assets[0].uri });
        setUser({ ...user, profileImage: response.assets[0].uri });
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.maincontainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      <Text style={styles.header}>Edit Profile</Text>

      <ProfileImage profileImage={profile.profileImage} onPickImage={openImagePicker} />

      <TextInput label="Name" value={profile.name} onChangeText={(text) => setProfile({ ...profile, name: text })} placeholder="Enter your name" />
      <TextInput label="Email" value={profile.email} onChangeText={(text) => setProfile({ ...profile, email: text })} placeholder="Enter your email" keyboardType="email-address" />
      <TextInput label="Phone Number" value={profile.phone} onChangeText={(text) => setProfile({ ...profile, phone: text })} placeholder="Enter your phone number" keyboardType="phone-pad" />
      <TextInput label="DOB" value={profile.dob} onChangeText={(text) => setProfile({ ...profile, dob: text })} placeholder="mm/dd/yyyy" />

      <PickerField label="Gender" selectedValue={selectedGender} onValueChange={setSelectedGender} items={[{ label: "Select Gender" }, { label: "Male", value: "male" }, { label: "Female", value: "female" }]} />

      <BioInput label="Bio" value={profile.bio} onChangeText={(text) => setProfile({ ...profile, bio: text })} placeholder="Type here..." />

      <SignatureInput value={profile.signature} onChangeText={(text) => setProfile({ ...profile, signature: text })} />

      <TouchableOpacity style={styles.button} onPress={saveChanges}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    padding: 20,
    backgroundColor: '#EDEDED',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3C3B43',
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#07193D',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfile;
