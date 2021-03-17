import React from 'react'
import { TouchableOpacity } from 'react-native'

import styles from './Styles'
import AppText from '../AppText'

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

export default PickerItem
