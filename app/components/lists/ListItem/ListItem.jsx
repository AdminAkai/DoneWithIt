import React from 'react'
import {
    Image,
    View,
    TouchableHighlight
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../../../config/styles'
import AppText from '../../AppText'

import styles from './Styles'

const ListItem = ({ title, subtitle, image, IconCommponent, onPress, renderRightActions, showChevrons = false }) => {
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={defaultStyles.colors.light}
            >
                <View style={styles.container}>
                    {IconCommponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} styles={styles.title}>{title}</AppText>
                        {subtitle && <AppText numberOfLines={2} style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                    { showChevrons && <MaterialCommunityIcons color={defaultStyles.colors.medium} name="chevron-right" size={25} /> }
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem