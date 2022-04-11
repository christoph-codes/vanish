import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import Main from '../templates/Main'
import P from '../components/P'
import Button from '../components/Button'

interface IHomeProps {
    navigation: any;
}

export default function Home({ navigation }: IHomeProps) {
    return (
        <Main>
            <View style={styles.Home}>
                <View>
                    <Image style={styles.logo} source={require('../assets/vanish_logo.png')} width={200} resizeMode='center' />
                    <P align="center">
                        True privacy can only be achieved when all of your data is not saved. Vanish only stores the last message until you respond.
                    </P>
                    <Button onPress={() => navigation.navigate('Login')} >Login</Button>
                    <Button onPress={() => navigation.navigate('Splash')} variant="secondary">Splash</Button>
                </View>
            </View>
        </Main>
    )
};
const styles = StyleSheet.create({
    Home: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 16,
    }
})
