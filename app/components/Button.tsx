import { ButtonProps } from 'react-native';
import { Button as NButton } from 'native-base';

interface IButtonProps extends ButtonProps {
    variant?: 'primary' | 'secondary';
    children: string;
    rest?: any;
}

const Button = ({
    variant = 'primary',
    children = '',
    ...rest
}: IButtonProps & any) => {
    const getVariant = () => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: 'brand.primary',

                }
            case 'secondary':
                return {
                    backgroundColor: 'transparent',
                    borderWidth: '2',
                    borderColor: 'brand.primary',
                }
            default:
                return {
                    backgroundColor: 'brand.primary',
                }
        }
    }
    return (
        <NButton
            fontSize='lg'
            fontWeight='bold'
            padding={4}
            paddingY={8}
            marginBottom={4}
            borderRadius={8}
            {...getVariant()}
            {...rest}
        >
            {children}
        </NButton>
    )
}

export default Button;