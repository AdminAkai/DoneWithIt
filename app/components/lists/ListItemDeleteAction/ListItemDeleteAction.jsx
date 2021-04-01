import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './Styles'
import defaultStyles from '../../../config/styles'

const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}> 
                <MaterialCommunityIcons 
                name='trash-can'
                size={35}
                color={defaultStyles.colors.white}
                /> 
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ListItemDeleteAction
