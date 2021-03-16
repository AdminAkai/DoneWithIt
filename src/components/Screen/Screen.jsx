import React from 'react'
import { SafeAreaView } from 'react-native'

import styles from './Styles'

const Screen = ({ children }) => {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

export default Screen
