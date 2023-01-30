import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Tile, Card,  } from 'react-native-elements';
import {personAdd} from "ionicons/icons";

const DiscoverScreen = props => {
    const navigation = useNavigation();
       return (
           <View style={styles.container}>
               <TouchableOpacity onPress={() => navigation.navigate("Events")}>
                   <View style={styles.tile}>
                       <ImageBackground
                           source={require('./../assets/eventBg.jpeg')}
                           style={styles.image}
                           imageStyle={{ borderRadius: 10}}
                       >
                           <View style={[styles.overlay, styles.overlayPurple]}>
                               <Text style={styles.tileText}>All events</Text>
                           </View>
                       </ImageBackground>
                   </View>
               </TouchableOpacity>

               <TouchableOpacity>
                   <View style={styles.tile}>
                       <ImageBackground
                           source={require('./../assets/eventBg.jpeg')}
                           style={styles.image}
                           imageStyle={{ borderRadius: 10}}
                       >
                           <View style={[styles.overlay, styles.overlayBlue]}>
                               <Text style={styles.tileText}>All student organisations</Text>
                           </View>
                       </ImageBackground>
                   </View>
               </TouchableOpacity>

               <TouchableOpacity>
                   <View style={styles.tile}>
                       <ImageBackground
                           source={require('./../assets/eventBg.jpeg')}
                           style={styles.image}
                           imageStyle={{ borderRadius: 10}}
                       >
                           <View style={[styles.overlay, styles.overlayGreen]}>
                               <Text style={styles.tileText}>All posts</Text>
                           </View>
                       </ImageBackground>
                   </View>
               </TouchableOpacity>
           </View>
       );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 15
    },
    tile: {
        // backgroundColor: '#fff',
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center"
    },
    overlay: {
        width: '100%',
        height: '100%',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        borderRadius: 10,
    },
    overlayPurple: {
        backgroundColor:'rgba(145,35,142,0.8)',
    },
    overlayBlue: {
        backgroundColor:'rgba(73,82,173,0.8)',
    },
    overlayGreen: {
        backgroundColor:'rgba(61,166,143,0.8)',
    },
    tileText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default DiscoverScreen;
