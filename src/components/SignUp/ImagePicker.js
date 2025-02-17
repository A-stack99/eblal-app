
import React, {useState} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = ({ navigtaion }) => {
     const [imageUri, setImageUri] = useState(null);
    
      const openImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo', maxWidth: 800, maxHeight: 800 }, response => {
          if (response.assets) setImageUri(response.assets[0].uri);
        });
      };
  return (
    
   <View style={styles.container1}>
           <View style={styles.getPic}>
             <TouchableOpacity onPress={openImagePicker}>
               <FontAwesome name="camera" size={14} style={styles.camera} />
             </TouchableOpacity>
           </View>
           <Image
             source={imageUri ? { uri: imageUri } : require('../../assests/images/profile.png')}
             style={styles.profileImage}
           />
         </View>
  );
};

const styles = {
  container1: {
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 15,
  },
  getPic: {
    position: 'absolute',
    right: 145,
    top: 70,
    marginBottom: 20,
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
    position: "absolute",
    borderColor: "#525252",
    borderRadius: 10,
    borderStyle: "solid",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
};

export default  ImagePicker;
