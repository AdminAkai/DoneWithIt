import React from 'react'
import {
    Image,
    View,
    TouchableHighlight
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

import colors from '../../../config/colors'
import AppText from '../AppText'

import styles from './Styles'

const ListItem = ({ title, subtitle, image, IconCommponent, onPress, renderRightActions }) => {
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    {IconCommponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText styles={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

export default ListItem