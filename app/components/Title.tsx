import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

interface ITitleProps {
	tag: 'h1' | 'h2' | 'h3' | 'h4'
	children: string
	align?: 'center' | 'left' | 'right'
}

export default function Title({ tag, align = 'left', children }: ITitleProps) {
	const styles = StyleSheet.create({
		Title: {
			color: '#eee',
			fontWeight: 'bold',
			marginBottom: 8,
		},
		h1: {
			fontSize: 40,
		},
		h2: {
			fontSize: 32,
		},
		h3: {
			fontSize: 24,
		},
		h4: {
			fontSize: 20,
		},
		left: {
			textAlign: 'left',
		},
		center: {
			textAlign: 'center',
		},
		right: {
			textAlign: 'right',
		},
	})
	return (
		<Text style={[styles.Title, styles[tag], styles[align]]}>
			{children}
		</Text>
	)
}
