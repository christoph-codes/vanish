import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface IButtonProps {
	variant: 'primary' | 'secondary'
	children: string
}

export default function Button({
	variant = 'primary',
	children,
}: IButtonProps) {
	const styles = StyleSheet.create({
		Button: {
			marginBottom: 16,
			justifyContent: 'center',
			paddingHorizontal: 24,
			paddingVertical: 24,
			borderRadius: 8,
			alignItems: 'center',
		},
		ButtonText: {
			color: '#eee',
			fontWeight: 'bold',
			fontSize: 18,
		},
		primary: {
			backgroundColor: '#222',
			borderStyle: 'solid',
			borderColor: '#222',
			borderWidth: 2,
		},
		secondary: {
			backgroundColor: 'transparent',
			borderStyle: 'solid',
			borderColor: '#222',
			borderWidth: 2,
		},
	})
	return (
		<TouchableOpacity style={[styles.Button, styles[variant]]}>
			<Text style={styles.ButtonText}>{children}</Text>
		</TouchableOpacity>
	)
}
