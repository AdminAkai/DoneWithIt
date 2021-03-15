import React from 'react'

import { View, Image } from 'react-native'

import AppText from '../AppText'

import styles from './Styles'

const ListingCard = ({ title, subtitle, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.imageStyle} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    )
}

export default ListingCard