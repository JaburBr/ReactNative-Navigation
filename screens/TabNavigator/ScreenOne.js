import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Log Out'
                    onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')} />
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

export default ScreenOne;
