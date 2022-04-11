import { View, StyleSheet, SafeAreaView } from "react-native";

export default function Main({ children }: any) {
    return (
        <SafeAreaView style={styles.Main}>
            <View style={styles.MainContainer}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#111111',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    MainContainer: {
        padding: 16,
        flex: 1,
        alignSelf: 'stretch',
    }
})