import { TouchableOpacity, Text, StyleSheet, PressableProps, TouchableOpacityProps } from 'react-native'

interface IButtonProps {
	variant: 'primary' | 'secondary'
	children: string
	rest?: any
}

export default function Button({
	variant = 'primary',
	children,
	...rest
}: IButtonProps & PressableProps & TouchableOpacityProps) {
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
		<TouchableOpacity style={[styles.Button, styles[variant]]} {...rest}>
			<Text style={styles.ButtonText}>{children}</Text>
		</TouchableOpacity>
	)
}
