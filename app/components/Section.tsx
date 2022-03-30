import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import Row from './Row'
import Col from './Col'

interface ISectionProps {
	bgColor?: string
	children?: ReactNode
	rest?: any[]
}
export default function Section({
	bgColor = 'transparent',
	children,
	...rest
}: ISectionProps) {
	return (
		<Row style={styles.Section} {...rest}>
			<Col>{children}</Col>
		</Row>
	)
}

const styles = StyleSheet.create({
	Section: {
		paddingVertical: 40,
	},
})
