import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <View style={styles.container} >
                <Button title='Log In' onPress={()=>this.props.navigation.navigate('LoginScreen')} />
                <Button title='Sign Up' onPress={()=>this.props.navigation.navigate('SignUpScreen')} />
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

export default WelcomeScreen;