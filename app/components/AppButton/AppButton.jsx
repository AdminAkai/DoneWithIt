import React from 'react'
import { 
    TouchableOpacity,
    Text
} from 'react-native'

import styles from './Styles'
import defaultStyles from '../../../config/styles'

const AppButton = ({ title, onPress, color = 'primary' }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default AppButton