import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Profile = props => {
   const navigation = useNavigation();
   const loggedInUser = useSelector(state => state.user.loggedInUser);

   return (
      <View style={styles.container}>
         <View style={styles.profileHeader}>
            <View>
               <Image
                  style={styles.profileImg}
                  source={require('./../assets/profileImg.png')}
               />
            </View>
            <View style={styles.profileInfo}>
               <Text style={styles.userName}>{loggedInUser.name}</Text>
               <Text>{loggedInUser.email}</Text>
               <Text>{loggedInUser.title}</Text>
          </View>
         </View>
         
         <TouchableOpacity style={styles.editProfileBtn} onPress={() => navigation.navigate("EditProfile")}>
               <Text style={styles.editProfileText}>Edit Profile</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 20,
      marginRight: 20
   },
   editProfileBtn:{
      backgroundColor:'#5050A5',
      width:'100%',
      height:40,
      borderRadius:10,
      marginTop:20,
   },
   editProfileText:{
      margin: 'auto',
      color: 'white',
      fontSize: 16,
      fontWeight:500
   },
   profileImg: {
      width: 80,
      height: 80
   },
   profileHeader: {
      flex: 1,
      flexDirection: 'row',
   },
   profileInfo:{
      marginLeft: 30
   }, 
   userName:{
      fontSize: 26,
      color:'#5050A5'
   }
});

export default Profile;