import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Profile from '../components/Profile';
import Event from '../components/Event';

const EventScreen = props => {
    return (
        <View style={styles.container}>
            <Event />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 0,
    }
});

export default EventScreen;
