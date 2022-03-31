import { View, StyleSheet } from "react-native";

export default function Main({ children }: any) {
    return (
        <View style={styles.Main}>
            <View style={styles.MainContainer}>
                {children}
            </View>
        </View>
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
    }
})