import React from 'react'
import { View } from 'react-native'

import styles from './Styles'
import Icon from '../Icon'
import AppText from '../AppText'

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

export default CategoryPickerItem
