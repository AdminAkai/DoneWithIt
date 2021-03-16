import React from 'react'
import { View, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './Styles'
import colors from '../../../config/colors'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}
            <TextInput style={styles.TextInput} underlineColorAndroid='transparent' {...otherProps} />
        </View>
    )
}

export default AppTextInput
