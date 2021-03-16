import React from 'react';

import AppTextInput from './src/components/AppTextInput/AppTextInput';

import Screen from './src/components/Screen'

export default function App() {

  return (
    <Screen>
      <AppTextInput placeholder='Username' icon='email'/>
    </Screen>
  )
}

