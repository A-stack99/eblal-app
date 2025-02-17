import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { ContextAPI } from '../Global/ContextAPI';
import Back from '../components/OverView/Back'
import ProfileImage from '../components/OverView/ProfileImage';
import MiniStats from '../components/OverView/MiniStats';
import Bio from '../components/OverView/Bio';

const OverView = ({ navigation }) => {
  const { user } = useContext(ContextAPI);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container1}>
        <Back onPress={() => navigation.goBack()} />

        <Text style={styles.header}>Profile Overview</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image
            style={styles.pen}
            source={require('../assests/images/pencil.png')}
          />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <ProfileImage imageUrl={user?.profileImage} />

          <View style={styles.info}>
            <View style={styles.verified}>
              <Image source={require('../assests/images/image1.png')} />
              <Text style={styles.verifText}>Certified by Saudi Commission for Health Specialties</Text>
            </View>

            <Text style={[styles.name, { marginTop: 10 }]}>{user?.name}</Text>
            <Text style={styles.passion}>{user?.role}</Text>
          </View>
        </View>

        <View style={styles.miniContainer}>
          <MiniStats label="Patients" value="+617" />
          <MiniStats label="Experiences" value="+10 year" />
          <MiniStats label="Ratings" value="4.9 ⭐" />
        </View>

        <Text style={styles.title}>About a doctor</Text>
        <Text style={styles.desc}>{user?.bio || 'No bio available'}</Text>

        <Bio
          title="Education"
          items={[
            { title: 'Saudi Dental Medical University', description: 'BDS, 1998 - 2002' }
          ]}
        />

        <Bio
          title="Work & Experience"
          items={[
            { title: 'Glowing Smiles Family Dental Clinic', description: '2010 - Present (5 years)' },
            { title: 'Comfort Care Dental Clinic', description: '2007 - 2010 (3 years)' }
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container1: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    fontFamily: 'Poppins',
    width: 200,
    lineHeight: 33,
    letterSpacing: 1,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#3C3B43',
  },
  pen: {
    position: 'absolute',
    width: 35,
    height: 35,
    top: -30,
    right: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  passion: {
    color: 'gray',
  },
  verified: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    color: '#07193D',
    borderRadius: 5,
  },
  verifText: {
    color: '#07193D',
    marginLeft: 5,
    fontSize: 8,
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins',
    lineHeight: 27,
    letterSpacing: 1,
    color: '#3C3B43',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  desc: {
    color: '#61606C',
  },
});

export default OverView;
