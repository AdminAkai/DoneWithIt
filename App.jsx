import React from 'react';
import { 
  TextInput
} from 'react-native';

import Screen from './src/components/Screen'

export default function App() {

  return (
    <Screen>
      <TextInput 
        placeholder="First Name"
      />
    </Screen>
  )
}

