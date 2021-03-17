import React from 'react'
import { View, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './Styles'
import defaultStyles from '../../../config/styles'


const AppTextInput = ({ icon, width, ...otherProps }) => {
    return (
        <View style={[styles.container, { width }]}>
            {icon && 
                <MaterialCommunityIcons 
                    name={icon} 
                    size={20} 
                    color={defaultStyles.colors.medium} 
                    style={styles.icon}
                />
            }
            <TextInput 
                placeholderTextColor={defaultStyles.colors.medium}
                style={defaultStyles.text} 
                underlineColorAndroid='transparent' 
                {...otherProps} 
            />
        </View>
    )
}

export default AppTextInput
