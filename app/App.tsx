import React from 'react'
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import Title from './components/Title'
import P from './components/P'
import Button from './components/Button'
import Row from './components/Row'
import HR from './components/HR'
import Section from './components/Section'

export default function App() {
	return (
		<SafeAreaView style={styles.App}>
			<ScrollView>
				<View style={styles.AppContainer}>
					<Section>
						<Title tag="h1" align="center">
							Vanish
						</Title>
						<P align="center">
							Open up App.tsx to start working on your app! Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium illo quam eos labore, provident
							delectus. In natus, quasi dolores suscipit ratione
							dolorem possimus! Ipsam aperiam nam earum ducimus
							dolorum repudiandae!
						</P>
						<Button variant="secondary">Button 2</Button>
						<HR />
					</Section>
					<Section>
						<Title tag="h2">Welcome to Vanish</Title>
						<Title tag="h3">Welcome to Vanish</Title>
						<Title tag="h4">Welcome to Vanish</Title>
					</Section>
					<Button variant="primary">Button 1</Button>
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
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	App: {
		flex: 1,
		backgroundColor: '#111111',
	},
	AppContainer: {
		padding: 16,
	},
})
