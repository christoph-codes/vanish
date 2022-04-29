import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Row from '../components/Row';
import Button from '../components/Button';
import Messages from '../components/Messages';
import TemplateDashboard from '../templates/TemplateDashboard';
import Input from '../components/Input';
import conversations from '../util/conversations';
import { useUser } from '../providers/UserProvider';

export default function Conversation({ navigation, route }: any) {
    const convo = route.params;
    const { user } = useUser();
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        console.log('convo:', convo);
        const newMessage = {
            message,
            sender: user.id,
            receiver: 55,
        }
        conversations[convo].messages.push(newMessage);
    }
    return (
        <TemplateDashboard backButton screenTitle={convo.name} navigation={navigation}>
            <View style={styles.Conversation}>
                <ScrollView>
                    <Messages messages={convo.messages} />
                </ScrollView>
                <Row>
                    <Input placeholder="Email" value={message} onChangeText={setMessage} />
                    <Button onPress={() => sendMessage()}>Send</Button>
                </Row>
            </View>
        </TemplateDashboard>
    );
}

const styles = StyleSheet.create({
    Conversation: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
});
