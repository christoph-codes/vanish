import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import Messages from '../components/Messages';
import TemplateDashboard from '../templates/TemplateDashboard';

export default function Conversation({ navigation, route }: any) {
    const convo = route.params;
    return (
        <TemplateDashboard screenTitle={convo.name} navigation={navigation}>
            <View style={styles.Conversation}>
                <Text>{convo.name}</Text>
                <Messages messages={convo.messages} />
                <Button onPress={() => navigation.navigate('Dashboard')}>Go Back</Button>
            </View>
        </TemplateDashboard>
    );
}

const styles = StyleSheet.create({
    Conversation: {
        flex: 1,
        alignSelf: 'stretch',
    }
})