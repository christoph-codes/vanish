import { StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import HR from '../components/HR';
import Title from '../components/Title';
import Main from '../templates/Main';
import Row from '../components/Row';
import { useUser } from '../providers/UserProvider';

export default function TemplateDashboard({ children, navigation, backButton, screenTitle }: any) {
    const { user, logout } = useUser();
    const logoutUser = () => {
        logout();
        navigation.navigate('Home');
    }
    return (
        <Main style={styles.Dashboard}>
            <Row style={styles.Content}>
                {backButton && (
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.back}>Back</Text>
                    </TouchableOpacity>
                )}
                <Title align='center' tag="h4">{screenTitle}</Title>
                <TouchableOpacity onPress={() => logoutUser()}>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
            </Row>
            <HR />
            {children}
        </Main>
    )
}

const styles = StyleSheet.create({
    Dashboard: {
        backgroundColor: 'green',
        flex: 1,
    },
    Content: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logout: {
        color: '#999',
        textAlign: 'right',
    },
    back: {
        color: '#999',
        textAlign: 'left',
    }
})