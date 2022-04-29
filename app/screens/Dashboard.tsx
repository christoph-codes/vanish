import { FlatList, StyleSheet, Text, TouchableOpacity, View, ActionSheetIOS } from 'react-native';
import Title from '../components/Title';
import { useUser } from '../providers/UserProvider';
import TemplateDashboard from '../templates/TemplateDashboard';

export default function Dashboard({ navigation, route }: any) {
    const { user } = useUser();
    const conversations: Iconversation[] = [
        {
            id: 1,
            users: [1, 2],
            name: 'The Boys',
            messages: [
                {
                    sender: 1,
                    message: 'How is it going bro',
                    receiver: 2,
                },
                {
                    sender: 2,
                    message: 'Good man, Chillin! 👌',
                    receiver: 2,
                },
            ],
        },
        {
            id: 2,
            users: [2, 3],
            name: 'The Girls',
            messages: [
                {
                    sender: 2,
                    message: 'Whats up',
                    receiver: 1,
                },
                {
                    sender: 1,
                    message: 'Living life',
                    receiver: 3,
                },
            ],
        }
    ];
    const openConversation = (convo: Iconversation) => {
        navigation.navigate('Conversation', convo);
    }
    const Conversation = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => openConversation(item)} style={styles.Conversation}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    };
    return (
        <TemplateDashboard screenTitle={user.username} navigation={navigation}>
            <View style={styles.Dashboard}>
                <Title align="center" tag="h2">Conversations</Title>
                <FlatList data={conversations} renderItem={Conversation} />
            </View>
        </TemplateDashboard>
    )
}

const styles = StyleSheet.create({
    Dashboard: {
        flex: 1,
    },
    Conversation: {
        backgroundColor: '#ff9000',
        color: 'black',
        marginBottom: 8,
        fontSize: 32,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 4,
    }
})