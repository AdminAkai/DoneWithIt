import React from 'react'
import {
    Image,
    View
} from 'react-native'

import AppText from '../AppText'

import styles from './Styles'

const ListItem = ({ title, subtitle, image }) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
                <AppText styles={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    )
}

export default ListItem