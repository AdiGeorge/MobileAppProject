import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import { Card, } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Event = props => {
    const navigation = useNavigation();
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    return (
        <View>
            <View>
                <View style={styles.collectionWidget}>
                    <Text style={styles.collectionWidgetText}>Part of collection</Text>
                </View>
                <ImageBackground
                    source={require('./../assets/eventBg.jpeg')}
                    style={styles.image}
                />
                <View style={styles.eventBlock}>
                    <Text style={styles.eventHeader}>Christmas with CBS Yoga</Text>
                    <Text style={styles.eventText}>Mon, 1. APR - 15:00 - 18:00</Text>
                    <Text style={styles.eventText}>Dalgas Have, 2000 Frederiksberg</Text>
                    <TouchableOpacity style={styles.eventGroup}>
                        <View>
                            <Text>CSB Students</Text>
                            <Text>View page</Text>
                        </View>
                        <Button color={'#5050A5'} title="Chat" onPress={() => navigation.navigate("ChatMessages")} />
                    </TouchableOpacity>
                    <View style={styles.eventOptions}>
                        <Pressable style={styles.eventOptionsButtonDefault} onPress={() => navigation.navigate("ChatMessages")}>
                            <Text style={styles.eventOptionsButtonDefaultText}>Interested</Text>
                        </Pressable>
                        <Pressable style={styles.eventOptionsButtonDefault} onPress={() => navigation.navigate("ChatMessages")}>
                            <Text style={styles.eventOptionsButtonDefaultText}>Going</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.eventBlock}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>

                <View style={styles.eventBlock}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    collectionWidget: {
        // height: 50,
        backgroundColor: '#32305D',
        padding: 20
    },
    collectionWidgetText: {
        color: '#fff',
    },
    image: {
        // flex: 1,
        width: '100%',
        height: 180,
        resizeMode: "cover",
        // justifyContent: "center"
    },
    eventBlock: {
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#eee',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 20,
    },
    eventHeader: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventDate: {
        flexDirection: 'row',
        color: '#000',
        fontSize: 15,
    },
    eventText: {
        color: '#000',
        fontSize: 15,
    },
    eventGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dadada',
        padding: 5,
        alignContent: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    eventOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eventOptionsButtonDefault: {
        backgroundColor: '#fff',
        borderColor: '#5050A5',
        borderRadius: 5,
        borderWidth: 1,
        width: '45%',
        padding: 10,
        color: '#5050A5',
    },
    eventOptionsButtonDefaultText: {
        color: '#5050A5',
        fontWeight: 'bold',
    }
});

export default Event;
