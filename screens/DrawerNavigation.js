import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { AppTabNavigator } from './HomeScreenTabNavigator';
import { HomeScreenMaterialTabNav } from './HomeScreenMaterialTabNav';

const InnerStackNavigator = new StackNavigator({
    TabNavigator: {
        screen: HomeScreenMaterialTabNav
    }
});

const AppDrawerNavigation = new DrawerNavigator({
    HomeScreen: { screen: InnerStackNavigator }
});

export default AppDrawerNavigation;
