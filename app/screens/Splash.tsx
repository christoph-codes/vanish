import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import Main from "../templates/Main";

export default function Splash() {
    return (
        <Main style={styles.Splash}>
            <Title align="center" tag="h2">Splash</Title>
        </Main>
    )
}

const styles = StyleSheet.create({
    Splash: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})