import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../../config/styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NewListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' color={defaultStyles.colors.white} size={40}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 40,
        borderColor: defaultStyles.colors.white,
        borderWidth: 10,
        bottom: 20,
        height: 70,
        justifyContent: 'center',
        width: 70,
    }
})

export default NewListingButton
