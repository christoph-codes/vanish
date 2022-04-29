import React from 'react'
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import UserProvider from './providers/UserProvider';

const Stack: any = createNativeStackNavigator();

export default function App() {
    const theme = extendTheme({
        colors: {
            brand: {
                primary: '#222',
                secondary: '#777',
                tertiary: '#999',
                light: '#eee',
            }
        },
        components: {
            Heading: {
                // Can pass also function, giving you access theming tools
                baseStyle: ({ colorMode }: any) => {
                    return {
                        color: colorMode === "dark" ? "red.300" : "blue.300",
                        fontWeight: "normal",
                    };
                },
            },
        },
    });
    return (
        <NativeBaseProvider theme={theme}>
            <UserProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                        {routes.map(({ name, component, options }, index) => {
                            return (
                                <Stack.Screen
                                    key={index}
                                    name={name}
                                    component={component}
                                    options={options}
                                />
                            )
                        })}
                    </Stack.Navigator>
                </NavigationContainer>
            </UserProvider>
        </NativeBaseProvider>
    )
}

