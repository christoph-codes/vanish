import { ReactNode } from 'react'
import { View } from 'react-native'

interface IColProps {
	children: ReactNode | ReactNode[]
	width?: string
}

export default function Col({ width, children }: IColProps) {
	return (
		<View style={{ flex: 1, paddingHorizontal: 8, width }}>{children}</View>
	)
}
