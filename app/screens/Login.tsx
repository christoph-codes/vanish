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
    const { error, signIn } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState({ code: '', message: '' })
    const login = () => {
        if (email && password) {
            console.log('Signup');
            setLoginError({ code: '', message: '' });
            signIn(email, password);
            if (!error) {
                navigation.navigate('Dashboard');
            } else {
                setLoginError(error);
            }
        } else {
            setLoginError({ code: '002', message: 'You must complete all fields' });
        }
    }
    return (
        <Main>
            <KeyboardAvoidingView style={styles.Login}>
                <View>
                    <Title tag="h1" align="center">
                        Login
                    </Title>
                    <Input placeholder="Email" placeholderTextColor="#555555" value={email} onChangeText={setEmail} />
                    <Input secureTextEntry placeholder="Password" placeholderTextColor="#555555" value={password} onChangeText={setPassword} />
                    {loginError.message ? <Text style={styles.errorText}>{loginError.message}</Text> : <></>}
                    <Row>
                        <Button onPress={login} >Login</Button>
                        <Button onPress={() => navigation.navigate('Home')} >Cancel</Button>
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
