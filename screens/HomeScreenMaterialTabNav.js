import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { DrawerActions } from 'react-navigation';

export class HomeScreenMaterialTabNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <View style={{ padding: 15, paddingTop: 0 }}>
                    <Ionicons name='ios-settings' size={24} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                </View>
            ),
            headerLeft: (
                <View style={{ padding: 15, paddingTop: 0 }}>
                    <Ionicons name='md-menu' size={24} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
                {/*
                <AppMaterialTopTabNavigation screenProps={{ navigation: this.props.navigation }}/>
                */}
                <AppMaterialTabNAvigation screenProps={{ navigation: this.props.navigation }} />
            </View>
        );
    }
}

export const AppMaterialTabNAvigation = createMaterialBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-home' color={tintColor} size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-settings' color={tintColor} size={24} />
            )
        }
    },
    ScreenThree: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Home2',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-home' color={tintColor} size={24} />
            )
        }
    },
    ScreenFour: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Setting2',
            //activeTintColor: 'orange',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-settings' color={tintColor} size={24} />
            )
        }
    }
}, {
        initialRouteName: 'ScreenOne',
        //order: ['ScreenTwo', 'ScreenOne'],
        activeTintColor: 'orange',
        shifting: false
    }
);

export const AppMaterialTopTabNavigation = createMaterialTopTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-home' color={tintColor} size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-settings' color={tintColor} size={24} />
            )
        }
    },
    ScreenThree: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Home2',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-home' color={tintColor} size={24} />
            )
        }
    }
}, {
        initialRouteName: 'ScreenOne',
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#f2f2f2',
                borderTopWidth: 0.5,
                borderTopColor: 'gray'
            },
            indicatorStyle: {
                //height:0
            },
            showIcon: true
        }
    }
);

export default HomeScreenMaterialTabNav;
