import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import UserProvider from './providers/UserProvider';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
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
    )
}

