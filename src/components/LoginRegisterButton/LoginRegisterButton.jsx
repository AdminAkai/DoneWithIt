import React, { useState } from 'react'
import { 
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import styles from './Styles'
import colors from '../../../config/colors'

const LoginRegisterButton = ({ title, onPress, color }) => {


    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default LoginRegisterButton