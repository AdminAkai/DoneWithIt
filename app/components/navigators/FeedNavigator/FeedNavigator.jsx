import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListingsScreen, ListingDetailsScreen } from '../../../screens'

const Stack = createStackNavigator()

const FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Listings' options={{ headerTitleAlign: 'center' }} component={ListingsScreen} />
            <Stack.Screen name='ListingDetails' options={{ headerTitle: 'Listing Details', headerTitleAlign: 'center' }} component={ListingDetailsScreen} />
        </Stack.Navigator>
    )
}

export default FeedNavigator
