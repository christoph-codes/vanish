import { StyleSheet, ScrollView } from 'react-native';
import { Actionsheet, useDisclose, Text } from 'native-base';
import Title from '../components/Title';
import Main from '../templates/Main';
import P from '../components/P';
import Button from '../components/Button'
import Row from '../components/Row';
import Section from '../components/Section';

export default function Splash({ navigation }: any) {
    const { isOpen, onOpen, onClose } = useDisclose();
    return (
        <Main style={styles.Splash}>
            <ScrollView>
                <Title align="center" tag="h2">
                    Splash!
                </Title>
                <Section>
                    <Title tag="h2">Welcome to Vanish</Title>
                    <Title tag="h3">Welcome to Vanish</Title>
                    <Title tag="h4">Welcome to Vanish</Title>
                </Section>
                <Button onPress={() => navigation.navigate('Home')} variant="primary">
                    Home
                </Button>
                <Button onPress={() => onOpen()} variant="secondary">
                    ActionSheet
                </Button>
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content padding={4} backgroundColor='brand.primary'>
                        <Text fontSize="md" color='brand.light' marginBottom={4}>
                            AsyncStorage has been extracted from react-native core and will be
                            removed in a future release. It can now be installed and imported
                            from '@react-native-async-storage/async-storage' instead of
                            'react-native'. See
                            https://github.com/react-native-async-storage/async-storage
                        </Text>
                        <Actionsheet.Item backgroundColor='brand.primary' color={'white'} alignItems='center' onPress={() => onClose()}>Close</Actionsheet.Item>
                    </Actionsheet.Content>
                </Actionsheet>
                <Row>
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 2</Button>
                </Row>
                <Row>
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <Button>Button 2</Button>
                    <Button>Button 2</Button>
                </Row>

                <P>
                    Open up App.tsx to start working on your app! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Accusantium illo quam eos labore,
                    provident delectus. In natus, quasi dolores suscipit ratione dolorem
                    possimus! Ipsam aperiam nam earum ducimus dolorum repudiandae!
                </P>
                <Button>Button 2</Button>
            </ScrollView>
        </Main >
    );
}

const styles = StyleSheet.create({
    Splash: {},
});
