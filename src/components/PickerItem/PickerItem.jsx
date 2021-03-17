import React from 'react'
import { TouchableOpacity } from 'react-native'

import styles from './Styles'
import AppText from '../AppText'

const PickerItem = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
        </TouchableOpacity>
    )
}

export default PickerItem
