import React, { useState } from 'react'
import { 
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import styles from './Styles'

const LoginRegisterButton = ({ buttonType }) => {

    const [textOnButton, changeText] = useState(buttonType)

    return (
        <TouchableOpacity 
            style={textOnButton === 'login' ? styles.login : styles.register}
        >
            <Text style={styles.buttonText}>{textOnButton.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default LoginRegisterButton