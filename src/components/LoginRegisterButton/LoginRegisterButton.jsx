import React from 'react'
import { 
    View,
    TouchableOpacity,
    Text
} from 'react-native'

import styles from './Styles'

const LoginRegisterButton = ({ buttonType }) => {

    return (
        <TouchableOpacity 
            styles={buttonType === 'login' ? styles.login : styles.register}
        >
            <Text>{buttonType}</Text>
        </TouchableOpacity>
    )
}

export default LoginRegisterButton