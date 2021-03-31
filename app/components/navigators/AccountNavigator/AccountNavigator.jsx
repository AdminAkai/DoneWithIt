import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AccountScreen, MessagesScreen } from '../../../screens'

const Stack = createStackNavigator()

const AccountNavigator = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Account' options={{ headerTitleAlign: 'center' }} component={AccountScreen}/>
                <Stack.Screen name='Messages' options={{ headerTitleAlign: 'center' }} component={MessagesScreen}/>
            </Stack.Navigator>
    )
}

export default AccountNavigator
