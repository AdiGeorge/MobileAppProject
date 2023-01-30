import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Button, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from '@mdi/react'
import { mdiMapMarker } from '@mdi/js';
import {useNavigation} from "@react-navigation/native";

const EventsScreen = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Event")}>
                <View style={styles.tile}>
                    <ImageBackground
                        source={require('./../assets/eventBg.jpeg')}
                        style={styles.image}
                        imageStyle={{ borderRadius: 10}}
                    >
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['transparent', 'rgba(0,0,0,0.8)']}
                            style={styles.gradient}
                        />
                        <View style={styles.eventContent}>
                            <Text style={styles.eventHeader}>Christmas with CBS Yoga</Text>
                            <Text style={styles.eventSubHeader}>CBS Yoga</Text>
                            <View style={styles.eventDate}>
                                <Text style={styles.eventText}>Mon, 1. APR - 15:00 - 18:00</Text>
                            </View>
                            <View style={styles.eventAddress}>
                                {/*<Icon*/}
                                {/*    path={mdiMapMarker}*/}
                                {/*    style={{width: 10, height: 10}}*/}
                                {/*/>*/}
                                <Text style={styles.eventText}>Dalgas Have, 2000 Frederiksberg</Text>
                            </View>
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
        backgroundColor: '#fff',
        width: '100%',
        height: 150,
        marginBottom: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        // justifyContent: "center"
    },
    gradient: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10,
    },
    eventContent: {
        padding: 10,
        marginTop: 'auto',
        alignContent: 'flex-end',
    },
    eventHeader: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    eventSubHeader: {
        color: '#fff',
        fontSize: 15,
    },
    eventDate: {
        flexDirection: 'row',
        color: '#fff',
        fontSize: 15,
    },
    eventText: {
        color: '#fff',
        fontSize: 15,
    }
});

export default EventsScreen;
