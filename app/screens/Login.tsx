import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
} from 'react-native';
import Main from '../templates/Main'
import Title from '../components/Title'
import Button from '../components/Button'
import Input from '../components/Input'
import Row from '../components/Row'
import { useUser } from '../providers/UserProvider';

interface ILoginProps {
    navigation: any;
}

export default function Login({ navigation }: ILoginProps) {
    const { user, setUser, error, setError } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = () => {
        if (username && password) {
            console.log('Signup');
            setError('');
            const credentials = {
                username,
                password,
            }
            setError('')
            setUser({
                username
            })
            navigation.navigate('Dashboard');
        } else {
            setError('You must complete all fields');
        }

    }
    return (
        <Main>
            <KeyboardAvoidingView style={styles.Login}>
                <View>
                    <Title tag="h1" align="center">
                        Login
                    </Title>
                    <Input placeholder="Username" placeholderTextColor="#555555" value={username} onChangeText={setUsername} />
                    <Input secureTextEntry placeholder="Password" placeholderTextColor="#555555" value={password} onChangeText={setPassword} />
                    {error ? <Text style={styles.errorText}>{error}</Text> : <></>}
                    <Row>
                        <Button onPress={login} >Login</Button>
                        <Button variant="secondary" onPress={() => navigation.navigate('Home')} >Cancel</Button>
                    </Row>
                </View>
            </KeyboardAvoidingView>
        </Main>
    )
};
const styles = StyleSheet.create({
    Login: {
        flex: 1,
        justifyContent: 'center',
    },
    errorText: {
        color: '#ff9797',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 16,
        marginTop: 8,
    }
})
