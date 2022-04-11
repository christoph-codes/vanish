import { StyleSheet, ScrollView } from "react-native";
import Title from "../components/Title";
import Main from "../templates/Main";
import P from '../components/P'
import Button from '../components/Button'
import Row from '../components/Row'
import Section from '../components/Section'

export default function Splash({ navigation }: any) {
    return (
        <Main style={styles.Splash}>
            <ScrollView>
                <Title align="center" tag="h2">Splash!</Title>
                <Section>
                    <Title tag="h2">Welcome to Vanish</Title>
                    <Title tag="h3">Welcome to Vanish</Title>
                    <Title tag="h4">Welcome to Vanish</Title>
                </Section>
                <Button onPress={() => navigation.navigate('Home')} variant="primary">Home</Button>
                <Button variant="secondary">Button 2</Button>
                <Row>
                    <Button variant="primary">Button 1</Button>
                    <Button variant="secondary">Button 2</Button>
                    <Button variant="secondary">Button 2</Button>
                </Row>
                <Row>
                    <Button variant="primary">Button 1</Button>
                    <Button variant="secondary">Button 2</Button>
                    <Button variant="secondary">Button 2</Button>
                    <Button variant="secondary">Button 2</Button>
                </Row>

                <P>
                    Open up App.tsx to start working on your app! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium illo quam eos labore, provident delectus. In
                    natus, quasi dolores suscipit ratione dolorem possimus!
                    Ipsam aperiam nam earum ducimus dolorum repudiandae!
                </P>
                <Button variant="secondary">Button 2</Button>
            </ScrollView>
        </Main>
    )
}

const styles = StyleSheet.create({
    Splash: {
    }
})