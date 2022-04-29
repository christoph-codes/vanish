import { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import Col from './Col'

interface IRowProps {
    children: any | any[]
    style?: object
    rest?: any[]
}

export default function Row({ children, style, ...rest }: IRowProps) {
    const getWidth = (): string => {
        const percentage = 100 / children?.length
        return `${percentage}%`
    }
    return (
        <View style={[styles.Row, style]} {...rest}>
            {children && children?.length
                ? children.map((child: ReactNode, index: number) => {
                    return (
                        <Col key={index} width={getWidth()}>
                            {child}
                        </Col>
                    )
                })
                : children}
        </View>
    )
}

const styles = StyleSheet.create({
    Row: {
        flexDirection: 'row',
        marginHorizontal: -8,
    },
})
