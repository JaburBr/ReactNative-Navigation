import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { HomeScreen } from './HomeScreen';
import { AppTabNavigator } from './HomeScreenTabNavigator';

const InnerStackNavigator = new StackNavigator({
    TabNavigator: {
        screen: AppTabNavigator
    }
});

const AppDrawerNavigation = new DrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }
});

export default AppDrawerNavigation;
