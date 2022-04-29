import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Input({ ...rest }: TextInputProps) {
    return <TextInput placeholderTextColor="#555555" style={[styles.Input, rest.style]} {...rest} />
}

const styles = StyleSheet.create({
    Input: {
        height: 56,
        padding: 8,
        borderWidth: 0,
        backgroundColor: '#222222',
        borderRadius: 4,
        width: 'auto',
        alignItems: 'center',
        marginBottom: 24,
        color: '#FFFFFF',
    }
})