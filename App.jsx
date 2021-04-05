import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationTheme, AppNavigator } from './app/components/navigators'

export default function App() {

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

