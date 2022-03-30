import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

interface IP {
	align?: 'left' | 'center' | 'right'
	children: string
}

export default function P({ align = 'left', children }: IP) {
	const styles = StyleSheet.create({
		P: {
			color: '#ccc',
			fontSize: 18,
			lineHeight: 32,
			marginBottom: 16,
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
	return <Text style={[styles.P, styles[align]]}> {children}</Text>
}
