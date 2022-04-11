import { TouchableOpacity, Text, StyleSheet, PressableProps, TouchableOpacityProps } from 'react-native'

interface IButtonProps {
    variant?: 'primary' | 'secondary'
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
            marginBottom: 24,
            justifyContent: 'center',
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderRadius: 8,
            alignItems: 'center',
            alignSelf: 'stretch',
        },
        ButtonText: {
            color: '#eee',
            fontWeight: 'bold',
            fontSize: 18,
        },
        primary: {
            backgroundColor: '#999',
            borderStyle: 'solid',
            borderColor: '#999',
            borderWidth: 2,
        },
        primaryButtonText: {
            color: '#eee',
        },
        secondary: {
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderColor: '#222',
            borderWidth: 2,
        },
        secondaryButtonText: {
            color: '#777',
        },
    })
    return (
        <TouchableOpacity style={[styles.Button, styles[variant]]} {...rest}>
            <Text style={styles.ButtonText}>{children}</Text>
        </TouchableOpacity>
    )
}
