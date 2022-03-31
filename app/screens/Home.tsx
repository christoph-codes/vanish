import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput,
} from 'react-native';
import Main from '../templates/Main'
import Title from '../components/Title'
import P from '../components/P'
import Button from '../components/Button'
import HR from '../components/HR'
import Section from '../components/Section'

interface IHomeProps {
    navigation: any;
}

export default function Home({ navigation }: IHomeProps) {
    return (
        <Main>
            <View style={styles.Home}>
                <View>
                    <Title tag="h1" align="center">
                        Vanish
                    </Title>
                    <TextInput></TextInput>
                    <P align="center">
                        Open up App.tsx to start working on your app! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium illo quam eos labore, provident
                        delectus. In natus, quasi dolores suscipit ratione
                        dolorem possimus! Ipsam aperiam nam earum ducimus
                        dolorum repudiandae!
                    </P>
                    <Button onPress={() =>
                        navigation.navigate('Splash')
                    } variant="secondary">Splash</Button>
                    <HR />
                </View>
            </View>
        </Main>
    )
};
const styles = StyleSheet.create({
    Home: {
        flex: 1,
        justifyContent: 'center',
    }
})
