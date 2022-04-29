import { View, StyleSheet } from 'react-native';
import Message from './Message';

export default function Messages({ messages }: any) {
    return (
        <View style={styles.Messages}>
            {messages.map((msg: any[], index: number) => {
                return <Message key={index} data={msg} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    Messages: {
        // alignSelf: 'stretch',
    }
})