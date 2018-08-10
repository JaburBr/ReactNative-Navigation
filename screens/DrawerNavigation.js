import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { HomeScreen } from './HomeScreen';

class HomeScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container} >
                <Text> HomeScreen </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


const AppDrawerNavigation = new DrawerNavigator({
    HomeScreen: { screen: HomeScreen }
});

export default AppDrawerNavigation;
