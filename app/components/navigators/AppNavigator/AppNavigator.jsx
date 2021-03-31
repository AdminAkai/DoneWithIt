import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
    AccountScreen,
    ListingEditScreen
} from '../../../screens'
import FeedNavigator from '../FeedNavigator'
import AccountNavigator from '../AccountNavigator'
import NewListingButton from '../NewListingButton'
import routes from '../routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Feed' 
                options={
                    { 
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
                        headerTitleAlign: 'center' 
                    }
                } 
                component={FeedNavigator}
            />
            <Tab.Screen name='ListingEdit' 
                options={({ navigation }) => (
                    { 
                        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>,
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="plus-circle" color={color} size={size} />,
                        headerTitle: 'Listing Edit', 
                        headerTitleAlign: 'center' 
                    }
                )} 
                component={ListingEditScreen}
            />
            <Tab.Screen name='Account'  
                options={
                    { 
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
                        headerTitleAlign: 'center' 
                    }
                } 
                component={AccountNavigator}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator
