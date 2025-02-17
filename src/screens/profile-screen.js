import React, { useContext } from "react";
import { SafeAreaView, View, FlatList, StatusBar, StyleSheet } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { ContextAPI } from '../Global/ContextAPI';

import Info from '../components/Profile/Info'
import BoxItem from '../components/Profile/BoxItem';
import ListItem from '../components/Profile/ListItem';

const Items = [
  { title: 'OverView', image: require('../assests/images/edit-2.png') },
  { title: 'My Patients', image: require('../assests/images/heart.png') },
  { title: 'Work Schedule', image: require('../assests/images/calenTick.png') },
  { title: 'Prescriptions', image: require('../assests/images/note.png') },
  { title: 'Reviews', image: require('../assests/images/star.png') },
  { title: 'Blog', image: require('../assests/images/grammerly.png') },
  { title: 'Library', image: require('../assests/images/document-text.png') },
  { title: 'Emergency No.', image: require('../assests/images/call-calling.png') },
  { title: 'Chats', image: require('../assests/images/edit-2.png') },
  { title: 'Settings', image: require('../assests/images/edit-2.png') },
  { title: 'Logout', image: require('../assests/images/edit-2.png') },
];

const ProfilePage = ({ navigation }) => {
  const { user, setUser } = useContext(ContextAPI);

  // Check the current user data
  console.log("Current User Data:", user);

  const openImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo', maxWidth: 800, maxHeight: 800 }, (response) => {
      if (response.assets) {
        setUser({ ...user, profileImage: response.assets[0].uri });
      }
    });
  };

  const handleNavigation = (title) => {
    switch (title) {
      case 'OverView':
        navigation.navigate('OverView');
        break;
      case 'My Patients':
        navigation.navigate('MyPatients');
        break;
      case 'Work Schedule':
        navigation.navigate('WorkSchedule');
        break;
      case 'Logout':
        navigation.navigate('MainScreen');
        break;
      default:
        console.log('Unknown navigation title: ', title);
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#27334E'} barStyle={"light-content"} />

      <View style={styles.bg}>
        <Info user={user} setUser={setUser} openImagePicker={openImagePicker} />

        <View style={styles.bgContainer}>
          <View style={styles.viewItem}>
            {['Wallet', 'Invoice'].map((title, index) => (
              <BoxItem key={index} title={title} />
            ))}
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: -60, flex: 1 }}
            data={Items}
            renderItem={({ item }) => (
              <ListItem item={item} onPress={handleNavigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#27334E",
  },
  bgContainer: {
    flex: 1,
    backgroundColor: "#EDEDED",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 15,
    top: 20,
    width: '100%',
    height: '100%',
    marginBottom: 10
  },
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: -55,
    width: '100%',
    height: '20%',
    marginBottom: 20,
  },
});

export default ProfilePage;
