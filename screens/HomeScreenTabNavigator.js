import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ScreenOne from './TabNavigator/ScreenOne';
import ScreenTwo from './TabNavigator/ScreenTwo';
import Ionicons from 'react-native-vector-icons/Ionicons';


export class AppTabNavigator extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <View style={{ padding: 10 }}>
                    <Ionicons name='md-menu' size={24} onPress={() => navigation.navigate('DrawerOpen')} />
                </View>
            )
        }
    }



    render() {
        return (
            <HomeScreenTabNavigator screenProps={{ navigation: this.props.navigation }} />
        );
    };

}


export const HomeScreenTabNavigator = new TabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name='md-compass' size={24} />
            ),
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name='md-compass' size={24} />
            ),
        }
    }
});

export default AppTabNavigator;
