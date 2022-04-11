import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../providers/UserProvider';

export default function Message({ data }: any) {
    const { user } = useUser();
    console.log('user:', user);
    const { sender, message } = data;
    return (
        <View style={[styles.Message, sender === 2 ? styles.sent : styles.received]}>
            <Text>Sender: {sender}</Text>
            <Text>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Message: {
        flex: 1,
        padding: 16,
        maxWidth: 240,
        alignSelf: 'stretch',
        borderRadius: 8,
        marginBottom: 16,
    },
    sent: {
        alignSelf: 'stretch',
        marginLeft: 'auto',
        backgroundColor: 'purple',
    },
    received: {
        alignSelf: 'stretch',
        marginRight: 'auto',
        backgroundColor: 'lightgray',
    }
})